import type { Route } from "./+types/brand-slug";
import { Link } from "react-router";
import { Fragment } from "react/jsx-runtime";

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import type { BrandType } from "~/modules/brand/type";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Skinify - Model" },
    { name: "description", content: "Premium mobile phone skin" },
  ];
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_API_URL}/brands/${params.brandSlug}`,
  );
  const models: BrandType = await response.json();

  return { params, models };
}

export default function BrandSlugRoute({ loaderData }: Route.ComponentProps) {
  const { params, models } = loaderData;

  return (
    <div className="mx-10 my-10">
      <section className="relative mt-40 flex justify-between gap-10">
        <h2 className="font-chakra-petch sticky top-40 self-start text-7xl font-bold text-nowrap text-white">
          {models.name} Skins
        </h2>

        <div className="grid min-w-4xl grid-cols-2 gap-8">
          {models.models.map((model) => (
            <Link key={model.id} to={`/shop/${params.brandSlug}/${model.slug}`}>
              <Card className="cursor-pointer border border-zinc-800 bg-linear-to-b from-neutral-900 to-black transition-colors duration-200 hover:border-white">
                <CardHeader className="flex justify-between">
                  <div className="flex h-48 flex-col justify-between">
                    <CardTitle className="font-chakra-petch text-xl text-white">
                      {model.name}
                    </CardTitle>
                    <p className="text-white">Premium Skins</p>
                  </div>
                  <img src={model.imageUrl} className="w-[200px]" />
                </CardHeader>
              </Card>
            </Link>
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
