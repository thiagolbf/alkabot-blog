import { PostPageContainer } from "./style";

import { useContext } from "react";
import { PostsContext } from "../../providers/posts";

import { PostCardComponent } from "../../components/PostCard";

export const PostPage = () => {
  const { posts } = useContext(PostsContext);
  return (
    <PostPageContainer>
      <h3>Posts de todos usuários</h3>
      <div>
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
      </div>
    </PostPageContainer>
  );
};
