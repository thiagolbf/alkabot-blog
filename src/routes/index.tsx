import { Route, Routes } from "react-router-dom";

import { Header } from "../components/Header";
import { HomePage } from "../pages/Home";
import { PostsPage } from "../pages/Posts";
import { UsersPage } from "../pages/Users";

export const RoutesComponent = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </>
  );
};
