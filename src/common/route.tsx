import { Route, Routes } from "react-router-dom";
import MainPage from "./view/main_page";

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}
