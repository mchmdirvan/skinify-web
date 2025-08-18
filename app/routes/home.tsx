import type { Route } from "./+types/home";
import { Link } from "react-router";

import { Card, CardHeader, CardTitle } from "~/components/ui/card";

import Samsung from "/Galaxy-S25-Ultra-Body.png?url";
import Xiaomi from "/Xiaomi-15-Ultra-Body.png?url";
import Iphone from "/iPhone-16-Pro-Body.png?url";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Skinify" },
    { name: "description", content: "Premium mobile phone skin" },
  ];
}

export default function Home() {
  const cards = [
    {
      name: "iPhone",
      image: Iphone,
    },
    {
      name: "Samsung",
      image: Samsung,
    },
    {
      name: "Xiaomi",
      image: Xiaomi,
    },
  ];

  return (
    <div className="flex justify-between px-40 py-10">
      <h2 className="text-5xl font-bold text-white">Shop</h2>

      <div className="flex min-w-2xl flex-col gap-8">
        {cards.map((card) => (
          <Link to="/products/iphone">
            <Card className="w-full max-w-2xl cursor-pointer overflow-hidden border border-zinc-800 bg-linear-to-b from-neutral-900 to-black transition-colors duration-200 hover:border-white">
              <CardHeader className="flex justify-between">
                <div className="flex h-80 flex-col justify-between">
                  <CardTitle className="text-3xl text-white">
                    {card.name}
                  </CardTitle>
                  <p className="text-white">Premium Skins</p>
                </div>
                <img src={card.image} className="w-[300px]" />
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
