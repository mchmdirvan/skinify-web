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
    <div className="mx-10 my-10">
      <section className="relative mt-40 flex justify-between gap-40">
        <h2 className="font-audiowide sticky top-40 self-start text-7xl font-bold text-white">
          Shop
        </h2>

        <div className="flex flex-col gap-8">
          {brands.map((brand) => (
            <Link key={brand.id} to={`/${brand.slug}`}>
              <Card className="w-full min-w-[55vw] cursor-pointer overflow-hidden border border-zinc-800 bg-linear-to-b from-neutral-900 to-black transition-colors duration-200 hover:border-white">
                <CardHeader className="flex justify-between">
                  <div className="flex h-96 flex-col justify-between">
                    <CardTitle className="font-audiowide text-5xl text-white">
                      {brand.name}
                    </CardTitle>
                    <p className="text-white">Premium Skins</p>
                  </div>
                  <img src={brand.imageUrl} className="w-[400px]" />
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
