import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { cn } from "~/lib/utils";
import type { Route } from "./+types/register";
import { Form, redirect } from "react-router";

export async function clientAction({ request }: Route.ClientActionArgs) {
  let formData = await request.formData();

  let fullName = formData.get("fullName");
  let username = formData.get("username");
  let email = formData.get("email");
  let password = formData.get("password");

  const registerUserData = {
    fullName: String(fullName),
    username: String(username),
    email: String(email),
    password: String(password),
  };

  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_API_URL}/auth/register`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registerUserData),
    },
  );

  const result = await response.json();

  return redirect("/login");
}

export default function Register() {
  return (
    <Form method="post" className={cn("flex flex-col gap-6")}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold text-white">Sign Up</h1>
        <p className="text-sm text-balance text-white">
          Create your account to start customizing your phone skins
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="fullName" className="text-white">
            Fullname
          </Label>
          <Input
            className="text-white"
            name="fullName"
            id="fullName"
            placeholder="John Doe"
            required
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="username" className="text-white">
            Username
          </Label>
          <Input
            className="text-white"
            id="username"
            name="username"
            placeholder="johndoe"
            required
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="email" className="text-white">
            Email
          </Label>
          <Input
            className="text-white"
            id="email"
            type="email"
            name="email"
            placeholder="m@example.com"
            required
          />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password" className="text-white">
              Password
            </Label>
          </div>
          <Input
            className="text-white"
            id="password"
            type="password"
            name="password"
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </div>
      <div className="text-center text-sm text-white">
        <p>By clicking ‘Register’, you agree to the:</p>
        <div className="text-xs">
          <a href="#" className="underline underline-offset-4">
            Terms of use
          </a>
          |
          <a href="#" className="underline underline-offset-4">
            Privacy Policy
          </a>
        </div>
      </div>
    </Form>
  );
}
