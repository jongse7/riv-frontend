import { Route, Routes } from "react-router-dom";
import MainPage from "../view/main_page";
import TestPage from "../../server/view/test";
import { Layout } from "./outlet";
import ServerPage from "../../server/view/server/page";

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/test" element={<TestPage />} />
        <Route path="/server" element={<ServerPage />} />
      </Route>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}
