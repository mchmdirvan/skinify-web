import type { Route } from "./+types/shop";
import { Link } from "react-router";

import { Card, CardHeader, CardTitle } from "~/components/ui/card";
import type { BrandType } from "~/modules/brand/type";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Skinify - Shop" },
    { name: "description", content: "Premium mobile phone skin" },
  ];
}

export async function clientLoader() {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_API_URL}/brands`,
  );
  const brands: BrandType[] = await response.json();

  return brands;
}

export default function Shop({ loaderData }: Route.ComponentProps) {
  const brands = loaderData;

  return (
    <div className="flex justify-between px-40 py-10">
      <h2 className="text-5xl font-bold text-white">Shop</h2>

      <div className="flex min-w-2xl flex-col gap-8">
        {brands.map((brand) => (
          <Link key={brand.id} to={`/${brand.slug}`}>
            <Card className="w-full max-w-2xl cursor-pointer overflow-hidden border border-zinc-800 bg-linear-to-b from-neutral-900 to-black transition-colors duration-200 hover:border-white">
              <CardHeader className="flex justify-between">
                <div className="flex h-80 flex-col justify-between">
                  <CardTitle className="text-3xl text-white">
                    {brand.name}
                  </CardTitle>
                  <p className="text-white">Premium Skins</p>
                </div>
                <img src={brand.imageUrl} className="w-[300px]" />
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
