import type { Route } from "./+types/register";
import { Form, redirect } from "react-router";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { cn } from "~/lib/utils";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Register - Skinify" },
    { name: "description", content: "Premium mobile phone skin" },
  ];
}

export async function action({ request }: Route.ActionArgs) {
  let formData = await request.formData();

  let fullName = String(formData.get("fullName"));
  let username = String(formData.get("username"));
  let email = String(formData.get("email"));
  let password = String(formData.get("password"));

  const registerUserData = {
    fullName,
    username,
    email,
    password,
  };

  const response = await fetch(`${process.env.BACKEND_API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(registerUserData),
  });

  const result = await response.json();

  if (!result) {
    return null;
  }

  return redirect("/login");
}

export default function Register() {
  return (
    <Form method="post" className={cn("flex flex-col gap-6")}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Sign Up</h1>
        <p className="text-xs text-balance md:text-sm">
          Create your account to start customizing your phone skins
        </p>
      </div>
      <div className="grid gap-3 lg:gap-6">
        <div className="grid gap-3">
          <Label htmlFor="fullName">Fullname</Label>
          <Input
            name="fullName"
            id="fullName"
            placeholder="John Doe"
            required
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="username">Username</Label>
          <Input id="username" name="username" placeholder="johndoe" required />
        </div>
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
          Register
        </Button>
      </div>
      <div className="text-center text-xs md:text-sm">
        <p>By clicking ‘Register’, you agree to the</p>
        <p>Terms of use & Privacy Policy</p>
      </div>
    </Form>
  );
}
