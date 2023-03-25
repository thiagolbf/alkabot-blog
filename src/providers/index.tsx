import { ReactNode } from "react";

import { PostsProvider } from "./posts";
import { UsersProvider } from "./users";

interface ProviderProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProviderProps) => {
  return (
    <>
      <PostsProvider>
        <UsersProvider>{children}</UsersProvider>
      </PostsProvider>
    </>
  );
};
