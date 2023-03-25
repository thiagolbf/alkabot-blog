import { UserContainer } from "./style";

interface UserCardComponentProps {
  userName: string;
  userEmail: string;
  userWebsite: string;
  userCompany: string;
}

export const UserCardComponent = ({
  userName,
  userEmail,
  userWebsite,
  userCompany,
}: UserCardComponentProps) => {
  return (
    <UserContainer>
      <p>
        <span>Nome:</span> {userName}
      </p>
      <p>
        <span>Email:</span> {userEmail}
      </p>
      <p>
        <span>Website:</span> {userWebsite}
      </p>
      <p>
        <span>Company:</span> {userCompany}
      </p>
    </UserContainer>
  );
};
