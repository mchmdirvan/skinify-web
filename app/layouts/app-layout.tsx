import { MenuIcon, SearchIcon, ShoppingCartIcon } from "lucide-react";
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
import { Fragment } from "react/jsx-runtime";
import {
  Sheet,
  SheetContent,
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

export default function AppLayout() {
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

  // Footer
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
      <header className="sticky top-4 z-10 mx-5 rounded-xl border border-zinc-800 bg-linear-to-b from-neutral-900/50 to-black/50 backdrop-blur-xs lg:mx-10">
        {/* Desktop Menu */}
        <nav className="hidden justify-between px-10 py-2 lg:flex">
          <Link
            to="/"
            className="font-audiowide text-4xl text-amber-400 hover:bg-neutral-800 hover:text-amber-400"
          >
            skinify
          </Link>

          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.items && (
                    <Fragment>
                      <NavigationMenuTrigger className="bg-transparent text-white">
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

                  {!item.items && (
                    <NavigationMenuLink
                      asChild
                      className="text-white hover:bg-neutral-800 hover:text-white"
                    >
                      <Link to={item.url}>{item.title}</Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}

              {menuIconItem.map((item) => (
                <NavigationMenuItem key={item.url}>
                  <NavigationMenuLink
                    asChild
                    className="text-white hover:bg-neutral-800 hover:text-white"
                  >
                    <Link to={item.url}>
                      <item.Icon />
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Mobile Menu */}
        <div className="flex items-center justify-between px-5 py-2 lg:hidden">
          <Link
            to="/"
            className="font-audiowide text-xl text-amber-400 hover:bg-neutral-800 hover:text-amber-400"
          >
            skinify
          </Link>

          <div className="flex items-center justify-center gap-4">
            <Link to="/cart">
              <ShoppingCartIcon className="size-4 text-white" />
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <MenuIcon className="size-4 text-white" />
              </SheetTrigger>
              <SheetContent className="overflow-y-auto bg-transparent backdrop-blur-xs">
                <SheetHeader>
                  <SheetTitle>
                    <Link
                      to="/"
                      className="font-audiowide text-xl text-amber-400 hover:bg-neutral-800 hover:text-amber-400"
                    >
                      skinify
                    </Link>
                  </SheetTitle>
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
                            <AccordionTrigger className="text-md py-0 font-semibold text-white hover:no-underline">
                              {item.title}
                            </AccordionTrigger>
                            <AccordionContent className="mt-2 flex flex-col gap-2 text-white">
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

      <main className="mx-5 mt-10 flex-1 lg:mx-10">
        <Outlet />
      </main>

      <footer className="mx-5 my-10 lg:mx-10">
        <Card className="px-4 py-12 sm:px-6 lg:px-8">
          <CardTitle className="grid gap-6 pb-8 lg:grid-cols-2">
            <div>
              <h2 className="font-chakra-petch text-2xl font-bold text-white">
                Get exclusive offers
              </h2>
              <p className="mt-2 text-xs text-gray-400 lg:text-base">
                Subscribe to Skinify latest updates, secret deals and
                promotions.
              </p>
            </div>
            <Button
              variant="outline"
              className="w-full rounded-full border-zinc-800 bg-neutral-900 py-6 text-xs text-white lg:text-base"
            >
              SUBSCRIBE TO SKINIFY NEWSLETTER
            </Button>
          </CardTitle>

          <CardContent className="grid grid-cols-1 gap-8 border-t border-zinc-800 pt-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-6">
              <h3 className="font-chakra-petch text-3xl font-bold text-amber-400">
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
              <div className="grid grid-cols-3 gap-3"></div>
            </div>
          </CardContent>
        </Card>
      </footer>
    </main>
  );
}
