import type { Route } from "./+types/shop";
import { Link } from "react-router";
import { Fragment } from "react/jsx-runtime";

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import type { BrandType } from "~/modules/brand/type";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Shop - Skinify" },
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
        <h2 className="font-chakra-petch sticky top-40 self-start text-7xl font-bold text-white">
          Shop
        </h2>

        <div className="grid grid-cols-2 gap-8">
          {brands.map((brand, index) => (
            <Fragment key={brand.id}>
              {index < 4 && (
                <Link
                  key={brand.id}
                  to={`/shop/${brand.slug}`}
                  className="col-span-2"
                >
                  <Card className="w-full min-w-[55vw] cursor-pointer border border-zinc-800 bg-linear-to-b from-neutral-900 to-black transition-colors duration-200 hover:border-white">
                    <CardHeader className="flex justify-between">
                      <div className="flex h-96 flex-col justify-between">
                        <CardTitle className="font-chakra-petch text-5xl text-white">
                          {brand.name}
                        </CardTitle>
                        <p className="text-white">Premium Skins</p>
                      </div>
                      <img src={brand.imageUrl} className="w-[400px]" />
                    </CardHeader>
                  </Card>
                </Link>
              )}

              {index >= 4 && (
                <Link
                  key={brand.id}
                  to={`/shop/${brand.slug}`}
                  className="col-span-1"
                >
                  <Card className="w-full cursor-pointer border border-zinc-800 bg-linear-to-b from-neutral-900 to-black transition-colors duration-200 hover:border-white">
                    <CardHeader className="flex justify-between">
                      <div className="flex h-48 flex-col justify-between">
                        <CardTitle className="font-chakra-petch text-xl text-white">
                          {brand.name}
                        </CardTitle>
                        <p className="text-white">Premium Skins</p>
                      </div>
                      <img src={brand.imageUrl} className="w-[200px]" />
                    </CardHeader>
                  </Card>
                </Link>
              )}
            </Fragment>
          ))}
        </div>
      </section>

      <section className="my-40">
        <Card className="border border-zinc-800 bg-linear-to-b from-neutral-900 to-black">
          <CardContent className="flex min-h-[20vh] flex-col justify-center gap-4">
            <p className="font-chakra-petch text-center text-3xl font-bold text-white">
              Can't find your device?
            </p>
            <div className="flex justify-center gap-1 text-white">
              <a href="tel:+6289755556000" className="hover:underline">
                +62 897 555 6000
              </a>
              <p>|</p>
              <a href="mailto:skinify@skinify.com" className="hover:underline">
                skinify@skinify.com
              </a>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
