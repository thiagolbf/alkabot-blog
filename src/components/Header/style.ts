import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 10px;
  border-bottom: 2px solid var(--green);

  background-color: var(--lightGreen);
  font-family: var(--roboto);

  display: flex;
  justify-content: space-between;

  > h1 {
    font-size: 20px;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    > h1 {
      margin-bottom: 15px;
    }
  }

  > ul {
    display: flex;
    font-size: 15px;

    > li {
      margin: 5px 5px;
      > a {
        color: var(--black);
      }
    }

    @media screen and (max-width: 500px) {
      flex-direction: column;
      align-items: center;
    }
  }
`;
