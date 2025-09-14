import { Form, redirect } from "react-router";
import type { Route } from "./+types/login";

import { getSession, destroySession } from "../session.server";

import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Logout - Skinify" },
    { name: "description", content: "Logout from your account" },
  ];
}

export async function action({ request }: Route.ActionArgs) {
  const session = await getSession(request.headers.get("Cookie"));

  return redirect("/", {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
}

export default function Logout() {
  return (
    <Form method="post" className={cn("flex flex-col gap-6")}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Logout</h1>
        <p className="text-sm text-balance">Are you sure want to logout?</p>
      </div>
      <Button type="submit" className="w-full" variant="destructive">
        Logout
      </Button>
    </Form>
  );
}
