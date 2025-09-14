import {
  CircleUserRoundIcon,
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "lucide-react";

import { Fragment } from "react/jsx-runtime";
import { Link } from "react-router";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "~/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

export default function Navbar({ userData }: any) {
  // Types
  type MenuItemTypes = {
    title: string;
    url: string;
    items?: MenuItemTypes[];
  };
  // Navbar
  const menuItems: MenuItemTypes[] = [
    {
      title: "Devices",
      url: "#",
      items: [
        {
          title: "iPhone",
          url: "/shop/iphone",
        },
        {
          title: "Samsung",
          url: "/shop/samsung",
        },
        {
          title: "Xiaomi",
          url: "/shop/xiaomi",
        },
        {
          title: "See All",
          url: "/shop",
        },
      ],
    },
    {
      title: "Specials",
      url: "#",
      items: [
        {
          title: "G.64 Skins",
          url: "#",
        },
        {
          title: "Titanium+ Skins",
          url: "#",
        },
        {
          title: "EVERYTHING Skins",
          url: "#",
        },
        {
          title: "Exclusive Drop - Woven",
          url: "#",
        },
        {
          title: "Exclusive Drop - Forged Carbon",
          url: "#",
        },
      ],
    },
    {
      title: "Sign In",
      url: "/login",
    },
    {
      title: "Sign Up",
      url: "/register",
    },
  ];

  const menuIconItem = [
    {
      Icon: ShoppingCartIcon,
      url: "/cart",
    },
    {
      Icon: SearchIcon,
      url: "#",
    },
  ];

  return (
    <header className="sticky top-4 z-10 mx-5 rounded-xl border border-zinc-800 bg-linear-to-b from-neutral-900/50 to-black/50 backdrop-blur-xs lg:mx-10">
      {/* Desktop Menu */}
      <nav className="hidden justify-between px-10 py-2 lg:flex lg:py-4">
        <Link
          to="/"
          className="font-audiowide text-3xl font-bold text-amber-400 hover:text-amber-400"
        >
          Skinify
        </Link>

        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            {menuItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                {item.items && (
                  <Fragment>
                    <NavigationMenuTrigger className="bg-transparent">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      {item.items?.map((subItem) => (
                        <NavigationMenuLink
                          asChild
                          key={subItem.title}
                          className="w-80"
                        >
                          <Link to={subItem.url}>{subItem.title}</Link>
                        </NavigationMenuLink>
                      ))}
                    </NavigationMenuContent>
                  </Fragment>
                )}

                {!item.items && !userData.id && (
                  <NavigationMenuLink
                    asChild
                    className="hover:bg-neutral-800 hover:text-white"
                  >
                    <Link to={item.url}>{item.title}</Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}

            {menuIconItem.map((item) => (
              <NavigationMenuItem key={item.url}>
                <NavigationMenuLink asChild className="hover:bg-neutral-800">
                  <Link to={item.url}>
                    <item.Icon />
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}

            {userData.id && (
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className="text-white hover:bg-neutral-800"
                >
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <CircleUserRoundIcon className="text-neutral-500" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-neutral-800 text-white">
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />

                      <DropdownMenuItem asChild>
                        <Link className="hover:cursor-pointer" to="/dashboard">
                          Dashboard
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link className="hover:cursor-pointer" to="/logout">
                          Logout
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </NavigationMenuLink>
              </NavigationMenuItem>
            )}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      {/* Mobile Menu */}
      <div className="flex items-center justify-between px-5 py-2 lg:hidden">
        <Link
          to="/"
          className="font-audiowide text-xl text-amber-400 hover:bg-neutral-800 hover:text-amber-400"
        >
          Skinify
        </Link>

        <div
          className={`flex items-center justify-center ${userData.id ? "gap-0" : "gap-4"}`}
        >
          <div className="flex items-center justify-center">
            <Link to="/cart">
              <ShoppingCartIcon className="size-4" />
            </Link>
            {userData.id && (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <CircleUserRoundIcon className="text-neutral-200" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-neutral-800 text-white">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />

                  <DropdownMenuItem asChild>
                    <Link className="hover:cursor-pointer" to="/dashboard">
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link className="hover:cursor-pointer" to="/logout">
                      Logout
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <MenuIcon className="size-4" />
            </SheetTrigger>
            <SheetContent className="overflow-y-auto bg-transparent backdrop-blur-2xl">
              <SheetHeader>
                <SheetTitle>
                  <Link
                    to="/"
                    className="font-audiowide text-xl text-amber-400 hover:bg-neutral-800 hover:text-amber-400"
                  >
                    Skinify
                  </Link>
                </SheetTitle>
                <SheetDescription>
                  Protecting the device worldwide, one device at a time.
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-6 p-4">
                <Accordion
                  type="single"
                  collapsible
                  className="flex w-full flex-col gap-4"
                >
                  {menuItems.map((item) => {
                    if (item.items) {
                      return (
                        <AccordionItem
                          key={item.title}
                          value={item.title}
                          className="border-b-0"
                        >
                          <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
                            {item.title}
                          </AccordionTrigger>
                          <AccordionContent className="mt-2 flex flex-col gap-2">
                            {item.items?.map((subItem) => (
                              <Link key={subItem.title} to={subItem.url}>
                                {subItem.title}
                              </Link>
                            ))}
                          </AccordionContent>
                        </AccordionItem>
                      );
                    }

                    return (
                      <Link
                        key={item.title}
                        to={item.url}
                        className="text-md font-semibold text-white"
                      >
                        {item.title}
                      </Link>
                    );
                  })}
                </Accordion>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
