import styled from "styled-components";

export const UserContainer = styled.div`
  width: 300px;
  max-height: 300px;
  overflow: auto;
  padding: 10px;

  background-color: var(--middleGray);

  margin: 10px;
  border: 2px solid var(--middleGray);
  border-radius: 10px;
  box-shadow: 1px 1px 8px 2px rgba(233, 233, 233, 1);

  font-family: var(--roboto);

  > p {
    margin: 5px;
    font-size: 14px;

    text-align: justify;

    > span {
      font-size: 16px;
      font-weight: 700;
    }
  }
`;
