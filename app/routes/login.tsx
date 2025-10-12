import { data, Form, Link, redirect } from "react-router";
import type { Route } from "./+types/login";

import { getSession, commitSession } from "../session.server";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { cn } from "~/lib/utils";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login - Skinify" },
    { name: "description", content: "Premium mobile phone skin" },
  ];
}

export async function loader({ request }: Route.LoaderArgs) {
  const session = await getSession(request.headers.get("Cookie"));

  if (session.has("token")) {
    return redirect("/dashboard");
  }

  return data(
    { error: session.get("error") },
    {
      headers: { "Set-Cookie": await commitSession(session) },
    },
  );
}

export async function action({ request }: Route.ActionArgs) {
  const session = await getSession(request.headers.get("Cookie"));

  let formData = await request.formData();

  let email = String(formData.get("email"));
  let password = String(formData.get("password"));

  const loginUserData = {
    email,
    password,
  };

  const response = await fetch(`${process.env.BACKEND_API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginUserData),
  });

  if (!response.ok) {
    session.flash("error", "Invalid username/password");

    return redirect("/login", {
      headers: { "Set-Cookie": await commitSession(session) },
    });
  }

  const result: { token: string } = await response.json();

  session.set("token", result.token);

  return redirect("/dashboard", {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}

export default function Login({ loaderData }: Route.ComponentProps) {
  const { error } = loaderData;

  return (
    <Form method="post" className={cn("flex flex-col gap-6")}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-sm text-balance">
          Enter your email below to login to your account
        </p>
        {error ? <div className="error">{error}</div> : null}
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="m@example.com"
            required
          />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input id="password" type="password" name="password" required />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link to="/register" className="underline underline-offset-4">
          Sign up
        </Link>
      </div>
    </Form>
  );
}
