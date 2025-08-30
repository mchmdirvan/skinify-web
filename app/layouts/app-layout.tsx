import { SearchIcon, ShoppingCartIcon } from "lucide-react";
import { Link, Outlet } from "react-router";

import { Card, CardContent, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "~/components/ui/navigation-menu";

export default function AppLayout() {
  const customerLinks = [
    { to: "/", text: "Contact Us" },
    { to: "/", text: "Track your Order Status" },
    { to: "/", text: "How to Apply" },
    { to: "/", text: "Installation Warranty" },
    { to: "/", text: "30-day Money Back Guarantee" },
    { to: "/", text: "Skinify® Cashback Program" },
    { to: "/", text: "Skinify® Premiere Program" },
    { to: "/", text: "Skinify® Offline Store" },
  ];

  const extrasLinks = [
    { to: "/", text: "Gallery" },
    { to: "/", text: "Co-Lab" },
    { to: "/", text: "Blog" },
    { to: "/", text: "About Heat Dissipation 🔥" },
    { to: "/", text: "Become an Affiliate" },
    { to: "/", text: "Skinify® Affiliate Program" },
    { to: "/", text: "Giveaway" },
    { to: "/", text: "Career" },
    { to: "/", text: "About Us" },
  ];

  return (
    <main className="flex min-h-[100vh] flex-col bg-black">
      <header className="sticky top-4 mx-10 rounded-xl border border-zinc-800 bg-linear-to-b from-neutral-900/50 to-black/50 backdrop-blur-xs">
        <NavigationMenu
          viewport={false}
          className="flex min-w-full justify-between px-10 py-2"
        >
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="font-audiowide text-3xl font-semibold text-amber-400 hover:bg-neutral-800 hover:text-amber-400"
              >
                <Link to="/">skinify</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>

          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-white">
                Devices
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-4">
                  <li className="">
                    <NavigationMenuLink asChild>
                      <Link to="/shop/iphone">iPhone</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/shop/samsung">Samsung</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/shop/xiaomi">Xiaomi</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/shop">See All</Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-white">
                Specials
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link to="#">G.64 Skinks</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="#">Titanium+ Skins</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="#">EVERYTHING Skins</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="#">Exclusive Drop - Woven</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="#">Exclusive Drop - Forged Carbon</Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="text-white hover:bg-neutral-800 hover:text-white"
              >
                <Link to="/shop/login">Sign In</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="text-white hover:bg-neutral-800 hover:text-white"
              >
                <Link to="/shop/register">Sign Up</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="text-white hover:bg-neutral-800"
              >
                {/* TODO */}
                <Link to="/">
                  <ShoppingCartIcon />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="text-white hover:bg-neutral-800"
              >
                <Link to="/">
                  {/* TODO */}
                  <SearchIcon />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="mx-10 my-10">
        <Card className="border border-zinc-800 bg-linear-to-b from-neutral-900 to-black px-4 py-12 sm:px-6 lg:px-8">
          <CardTitle className="grid grid-cols-2 gap-6 pb-8">
            <div>
              <h2 className="text-2xl font-bold text-white">
                Get exclusive offers
              </h2>
              <p className="mt-2 text-gray-400">
                Subscribe to Skinify latest updates, secret deals and
                promotions.
              </p>
            </div>
            <Button
              variant="outline"
              className="w-full rounded-full border-zinc-800 bg-neutral-900 py-6 text-white"
            >
              SUBSCRIBE TO SKINIFY NEWSLETTER
            </Button>
          </CardTitle>

          <CardContent className="grid grid-cols-1 gap-8 border-t border-zinc-800 pt-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-6">
              <h3 className="font-audiowide text-3xl font-bold text-amber-400">
                Skinify®
              </h3>
              <p className="text-xs text-white">
                Protecting the device worldwide, one device at a time.
              </p>
            </div>

            <div>
              <h4 className="mb-2 font-semibold text-white">Customers</h4>
              <ul className="space-y-1">
                {customerLinks.map((link) => (
                  <li key={link.text}>
                    <Link
                      to={link.to}
                      className="text-xs text-white transition-colors hover:text-amber-400"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-2 font-semibold text-white">Extras</h4>
              <ul className="space-y-1">
                {extrasLinks.map((link) => (
                  <li key={link.text}>
                    <Link
                      to={link.to}
                      className="text-xs text-white transition-colors hover:text-amber-400"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-white">Secure Payment</h4>
              <div className="grid grid-cols-3 gap-3">{/* PAYMENT ICON */}</div>
            </div>
          </CardContent>
        </Card>
      </footer>
    </main>
  );
}
