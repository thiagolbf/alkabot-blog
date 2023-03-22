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

interface PostsProviderData {
  posts: Posts[];
}

export const PostsContext = createContext<PostsProviderData>(
  {} as PostsProviderData
);

export const PostsProvider = ({ children }: PostsProviderProps) => {
  const [posts, setPosts] = useState<Posts[]>([] as Posts[]);

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

  return (
    <PostsContext.Provider value={{ posts }}>{children}</PostsContext.Provider>
  );
};
