import { Fragment } from "react/jsx-runtime";
import type { Route } from "./+types/shop";
import { Link } from "react-router";

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
    <Fragment>
      <section className="relative flex flex-col justify-between gap-10 lg:mt-40 lg:gap-40 xl:flex-row">
        <h2 className="font-chakra-petch top-40 text-center text-6xl font-bold text-white lg:text-7xl xl:sticky xl:self-start">
          Shop
        </h2>

        <div className="grid gap-4 md:grid-cols-2 lg:gap-8">
          {brands.map((brand, index) => (
            <Fragment key={brand.id}>
              {index < 4 && (
                <Link
                  key={brand.id}
                  to={`/shop/${brand.slug}`}
                  className="col-span-2"
                >
                  <Card className="w-full cursor-pointer transition-colors duration-200 hover:border-white xl:min-w-[55vw]">
                    <CardHeader className="flex justify-between">
                      <div className="flex h-20 flex-col justify-between md:h-60 lg:h-96">
                        <CardTitle className="font-chakra-petch text-white md:text-5xl">
                          {brand.name}
                        </CardTitle>
                        <p className="text-xs text-white md:text-base">
                          Premium Skins
                        </p>
                      </div>
                      <img
                        src={brand.imageUrl}
                        className="w-[100px] md:w-[300px] xl:w-[400px]"
                      />
                    </CardHeader>
                  </Card>
                </Link>
              )}

              {index >= 4 && (
                <Link
                  key={brand.id}
                  to={`/shop/${brand.slug}`}
                  className="col-span-2 md:col-span-1"
                >
                  <Card className="w-full cursor-pointer transition-colors duration-200 hover:border-white">
                    <CardHeader className="flex justify-between">
                      <div className="flex h-20 flex-col justify-between lg:h-48">
                        <CardTitle className="font-chakra-petch text-xl text-white">
                          {brand.name}
                        </CardTitle>
                        <p className="text-xs text-white">Premium Skins</p>
                      </div>
                      <img
                        src={brand.imageUrl}
                        className="w-[100px] lg:w-[200px]"
                      />
                    </CardHeader>
                  </Card>
                </Link>
              )}
            </Fragment>
          ))}
        </div>
      </section>

      <section className="my-40">
        <Card className="">
          <CardContent className="flex min-h-[20vh] flex-col justify-center gap-4">
            <p className="font-chakra-petch text-center text-xl font-bold text-white md:text-3xl">
              Can't find your device?
            </p>
            <div className="flex justify-center gap-1 text-xs text-nowrap text-white">
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
    </Fragment>
  );
}
