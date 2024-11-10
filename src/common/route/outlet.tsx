import { Outlet } from "react-router-dom";
import Header from "../layout/header";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-04">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}
