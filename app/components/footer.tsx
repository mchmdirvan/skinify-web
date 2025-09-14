import { Link } from "react-router";

import { Card, CardContent, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export default function Footer() {
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
    <footer className="mx-5 my-10 lg:mx-10">
      <Card className="px-4 py-12 sm:px-6 lg:px-8">
        <CardTitle className="grid gap-6 pb-8 lg:grid-cols-2">
          <div>
            <h2 className="font-chakra-petch text-2xl font-bold">
              Get exclusive offers
            </h2>
            <p className="mt-2 text-xs text-gray-400 lg:text-base">
              Subscribe to Skinify latest updates, secret deals and promotions.
            </p>
          </div>
          <Button
            variant="outline"
            className="w-full rounded-full border-zinc-800 bg-neutral-900 py-6 text-xs lg:text-base"
          >
            SUBSCRIBE TO SKINIFY NEWSLETTER
          </Button>
        </CardTitle>

        <CardContent className="grid grid-cols-1 gap-8 border-t border-zinc-800 pt-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <h3 className="font-audiowide text-3xl font-bold text-amber-400">
              Skinify®
            </h3>
            <p className="text-xs">
              Protecting the device worldwide, one device at a time.
            </p>
          </div>

          <div>
            <h4 className="mb-2 font-semibold">Customers</h4>
            <ul className="space-y-1">
              {customerLinks.map((link) => (
                <li key={link.text}>
                  <Link
                    to={link.to}
                    className="text-xs transition-colors hover:text-amber-400"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-2 font-semibold">Extras</h4>
            <ul className="space-y-1">
              {extrasLinks.map((link) => (
                <li key={link.text}>
                  <Link
                    to={link.to}
                    className="text-xs transition-colors hover:text-amber-400"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Secure Payment</h4>
            <div className="grid grid-cols-3 gap-3"></div>
          </div>
        </CardContent>
      </Card>
    </footer>
  );
}
