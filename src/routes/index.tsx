import { Route, Routes } from "react-router-dom";

import { Header } from "../components/Header";
import { HomePage } from "../pages/Home";
import { PostPage } from "../pages/Posts";

export const RoutesComponent = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostPage />} />
      </Routes>
    </>
  );
};
