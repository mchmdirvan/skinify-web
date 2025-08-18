import { Outlet } from "react-router";

export default function AppLayout() {
  return (
    <header>
      <nav></nav>
      <Outlet />
      <footer>
        <p>&copy; {new Date().getFullYear()} Amazing Safari</p>
      </footer>
    </header>
  );
}
