import { CommentContainer } from "./style";

interface CommentCardProps {
  userEmail: string;
  userComment: string;
}

export const CommentCard = ({ userEmail, userComment }: CommentCardProps) => {
  return (
    <CommentContainer>
      <p>
        <span>Usuário:</span> {userEmail}
      </p>
      <p>
        <span>Commentário:</span> {userComment}
      </p>
    </CommentContainer>
  );
};
