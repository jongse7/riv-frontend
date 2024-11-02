import { Route, Routes } from "react-router-dom";
import MainPage from "../view/main_page";
import TestPage from "../../server/view/server";

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/test" element={<TestPage />} />
    </Routes>
  );
}
