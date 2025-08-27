import { commitSession, getSession } from "~/session.server";
import type { Route } from "./+types/dashboard";
import { data, redirect } from "react-router";

export async function loader({ request }: Route.LoaderArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  console.log("token", session.get("token"));

  if (!session.has("token")) {
    return redirect("/login");
  }

  return null;
}

export default function Dashboard() {
  return <div className="text-white">Dashboard</div>;
}
