import { PostContainer, CommentsContainer } from "./style";

import { useState, useContext, useEffect } from "react";

import { UsersContext } from "../../providers/users";
import { PostsContext } from "../../providers/posts";

import { CommentCard } from "../CommentCard";

interface PostCardComponentProps {
  userId: number;
  postId: number;
  postTitle: string;
  post: string;
}

export const PostCardComponent = ({
  userId,
  postId,
  postTitle,
  post,
}: PostCardComponentProps) => {
  const [active, setActive] = useState<boolean>(false);
  const [commentsFetched, setCommentsFetched] = useState<boolean>(false);

  const { users } = useContext(UsersContext);
  const { getPostsComments, comments } = useContext(PostsContext);

  const buttonText = active ? "Esconder comentários" : "Ver comentários";

  const filteredName = users.map((value) => {
    if (value.id === userId) {
      return value.name;
    }
  });

  const filteredUserName = users.map((value) => {
    if (value.id === userId) {
      return value.username;
    }
  });

  const handleButtonClick = () => {
    setActive(!active);
  };

  /*This is for trigger the function when the user will see comments. 
  If will hide comments it's not necessary to update commets.
  Function below it's for this rule.
  */
  useEffect(() => {
    if (active && !commentsFetched) {
      getPostsComments(postId);
      setCommentsFetched(true);
    } else if (!active) {
      setCommentsFetched(false);
    }
  }, [active]);

  return (
    <PostContainer actived={active}>
      <p>
        <span>Nome:</span> {filteredName}
      </p>
      <p>
        <span>Usuário:</span> {filteredUserName}
      </p>
      <p>
        <span>Título:</span> {postTitle}
      </p>
      <p>
        <span>Post:</span> {post}
      </p>

      <button onClick={handleButtonClick}>{buttonText}</button>
      {active ? (
        <CommentsContainer>
          {comments.map((value) => {
            if (value.postId === postId) {
              return (
                <CommentCard
                  key={value.id}
                  userEmail={value.email}
                  userComment={value.body}
                />
              );
            }
          })}
        </CommentsContainer>
      ) : null}
    </PostContainer>
  );
};
