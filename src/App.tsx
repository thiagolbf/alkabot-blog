import { GlobalStyle } from "./style/global";

import { RoutesComponent } from "./routes";

import { PostCardComponent } from "./components/PostCard";

import { useContext } from "react";
import { PostsContext } from "../src/providers/posts";

function App() {
  const { posts } = useContext(PostsContext);

  return (
    <>
      <GlobalStyle />
      <RoutesComponent />
      {posts.map((value) => {
        return (
          <PostCardComponent
            key={value.id}
            userId={value.userId}
            postId={value.id}
            postTitle={value.title}
            post={value.body}
          />
        );
      })}
    </>
  );
}

export default App;
