import { Link, Outlet } from "react-router";
import Auth from "/auth.jpg";

export default function AuthLayout() {
  return (
    <main className="grid min-h-svh bg-black text-white lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link
            to="/"
            className="font-audiowide flex items-center gap-2 text-xl font-bold"
          >
            Skinify
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <Outlet />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-black lg:block">
        <img
          src={Auth}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </main>
  );
}
