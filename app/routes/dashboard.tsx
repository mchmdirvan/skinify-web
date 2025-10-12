import type { Route } from "./+types/dashboard";
import { redirect } from "react-router";

import { destroySession, getSession } from "../session.server";
import type { User } from "~/modules/user/type";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "~/components/ui/card";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard - Skinify" },
    { name: "description", content: "Premium mobile phone skin" },
  ];
}

export async function loader({ request }: Route.LoaderArgs) {
  const session = await getSession(request.headers.get("Cookie"));

  if (!session.has("token")) {
    return redirect("/login");
  }

  const token = session.get("token");

  const response = await fetch(`${process.env.VITE_BACKEND_API_URL}/auth/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    session.flash("error", "Failed to check user");
    return redirect("/login", {
      headers: { "Set-Cookie": await destroySession(session) },
    });
  }

  const userData: User = await response.json();

  return userData;
}

export default function Dashboard({ loaderData }: Route.ComponentProps) {
  const userData = loaderData;
  console.log(userData);
  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-8 text-3xl font-bold">Dashboard</h1>

      <Card className="max-w-fit">
        <CardContent>
          <CardTitle className="font-chakra-petch text-xl font-bold">
            Profile Information
          </CardTitle>
          <CardDescription className="grid max-w-xs grid-cols-2 text-xs text-nowrap">
            <p>Username</p>
            <p> : {userData.username}</p>
            <p>Email</p>
            <p> : {userData.email}</p>
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
