import { UserPageContainer } from "./style";

import { useContext } from "react";
import { UsersContext } from "../../providers/users";

import { UserCardComponent } from "../../components/UserCard";

export const UsersPage = () => {
  const { users } = useContext(UsersContext);

  return (
    <UserPageContainer>
      <h3>Usuários Cadastrados</h3>
      <div>
        {users.map((value) => {
          return (
            <UserCardComponent
              key={value.id}
              userName={value.name}
              userEmail={value.email}
              userWebsite={value.website}
              userCompany={value.company.name}
            />
          );
        })}
      </div>
    </UserPageContainer>
  );
};
