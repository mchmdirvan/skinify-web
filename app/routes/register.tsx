import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { cn } from "~/lib/utils";

export default function Register() {
  return (
    <form className={cn("flex flex-col gap-6")}>
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
            id="fullName"
            type="fullName"
            placeholder="John Doe"
            required
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="username" className="text-white">
            Username
          </Label>
          <Input id="username" type="username" placeholder="johndoe" required />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="email" className="text-white">
            Email
          </Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password" className="text-white">
              Password
            </Label>
          </div>
          <Input id="password" type="password" required />
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
    </form>
  );
}
