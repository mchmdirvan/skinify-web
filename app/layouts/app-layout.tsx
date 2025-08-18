import { SearchIcon, ShoppingCartIcon } from "lucide-react";
import { Link, Outlet } from "react-router";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "~/components/ui/navigation-menu";

export default function AppLayout() {
  return (
    <main className="flex min-h-[100vh] flex-col bg-black">
      <header>
        <NavigationMenu
          viewport={false}
          className="flex min-w-full justify-between px-40 py-2"
        >
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="text-2xl font-semibold text-white hover:bg-neutral-800 hover:text-white"
              >
                <Link to="/">Skinify</Link>
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
                      <Link to="#">iPhone</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="#">Samsung</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="#">Xiaomi</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="#">See All</Link>
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
                <Link to="/docs">Sign In</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="text-white hover:bg-neutral-800 hover:text-white"
              >
                <Link to="/docs">Sign Up</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="text-white hover:bg-neutral-800 hover:text-white"
              >
                <Link to="/docs">
                  <ShoppingCartIcon />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="text-white hover:bg-neutral-800 hover:text-white"
              >
                <Link to="/docs">
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

      <footer className="mx-auto py-2 text-xs text-white">
        <p>&copy; {new Date().getFullYear()} Skinify</p>
      </footer>
    </main>
  );
}
