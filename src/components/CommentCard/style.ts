import styled from "styled-components";

export const CommentContainer = styled.div`
  font-family: var(--roboto);

  margin: 5px;

  > p {
    margin: 2px;
    font-size: 12px;

    text-align: justify;

    > span {
      font-size: 14px;
      font-weight: 700;
    }
  }
`;
