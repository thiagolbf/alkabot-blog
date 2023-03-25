import { HeaderContainer } from "./style";

import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <HeaderContainer>
      <h1>Alkabot Blog</h1>

      <ul>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/users">Usuários Cadastrados</Link>
        </li>
      </ul>
    </HeaderContainer>
  );
};
