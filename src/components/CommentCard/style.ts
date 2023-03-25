import styled from "styled-components";

export const CommentContainer = styled.div`
  font-family: var(--roboto);

  margin: 5px;

  > p {
    margin: 2px;
    font-size: 14px;

    text-align: justify;

    > span {
      font-size: 16px;
      font-weight: 700;
    }
  }
`;
