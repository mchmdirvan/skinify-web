import type { Route } from "./+types/app-layout";
import { Outlet, redirect } from "react-router";

import type { User } from "~/modules/user/type";
import { destroySession, getSession } from "~/session.server";

import Navbar from "~/components/navbar";
import Footer from "~/components/footer";

export async function loader({ request }: Route.LoaderArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const token = session.get("token");
  const response = await fetch(`${process.env.VITE_BACKEND_API_URL}/auth/me`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

  const userData: User = await response.json();

  return { userData };
}

export async function action({ request }: Route.ActionArgs) {
  const session = await getSession(request.headers.get("Cookie"));

  return redirect("/", {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
}

export default function AppLayout({ loaderData }: Route.ComponentProps) {
  const { userData } = loaderData;

  return (
    <main className="flex min-h-[100vh] flex-col bg-black text-white">
      <Navbar userData={userData} />

      <main className="mx-5 mt-10 flex-1 lg:mx-10">
        <Outlet />
      </main>

      <Footer />
    </main>
  );
}
