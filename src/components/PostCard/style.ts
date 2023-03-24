import styled from "styled-components";

interface PostContainerProps {
  actived: boolean;
}

export const PostContainer = styled.div<PostContainerProps>`
  width: 300px;
  max-height: 350px;
  overflow: auto;
  padding: 10px;

  background-color: var(--middleGray);

  margin: 10px;
  border: 2px solid var(--middleGray);
  border-radius: 10px;
  box-shadow: 1px 1px 8px 2px rgba(233, 233, 233, 1);

  font-family: var(--roboto);

  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    width: 5px;
    background-color: var(--lightGray);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--gray);
    border-radius: 30px;
  }

  > p {
    margin: 5px;
    font-size: 14px;

    text-align: justify;

    > span {
      font-size: 16px;
      font-weight: 700;
    }
  }

  > button {
    font-family: var(--roboto);
    margin: 5px;
    font-size: 12px;
    width: 150px;
    padding: 3px;

    border-radius: 5px;
    border: none;

    background-color: ${(props) =>
      props.actived ? "var(--middleGreen)" : "var(--lightGreen)"};
  }
`;

export const CommentsContainer = styled.div`
  background-color: var(--lightGray);

  margin: 5px;
  padding: 10px;

  border-radius: 5px;
`;
