import { createContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";

interface PostsProviderProps {
  children: ReactNode;
}

interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Comments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface PostsProviderData {
  posts: Posts[];
  comments: Comments[];
  getPostsComments: (postId: number) => void;
}

export const PostsContext = createContext<PostsProviderData>(
  {} as PostsProviderData
);

export const PostsProvider = ({ children }: PostsProviderProps) => {
  const [posts, setPosts] = useState<Posts[]>([] as Posts[]);
  const [comments, setComments] = useState<Comments[]>([] as Comments[]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //every time when user check comments, will trigger this function to update comments or get if is the first time
  const getPostsComments = (postId: number) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((res) => {
        //check if there are comments with this ID
        const updateComments = comments.some((value) => {
          if (value.postId === postId) {
            return true;
          }
        });

        //if have comments in ID remove old comments and add new
        if (updateComments) {
          const removeOldComments = comments.filter((value) => {
            if (value.postId !== postId) {
              return value;
            }
          });

          setComments([...removeOldComments, ...res.data]);
        } else {
          setComments([...comments, ...res.data]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <PostsContext.Provider value={{ posts, comments, getPostsComments }}>
      {children}
    </PostsContext.Provider>
  );
};
