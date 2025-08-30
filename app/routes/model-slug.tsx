import type { Route } from "./+types/model-slug";
import { Link } from "react-router";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import type { ModelType } from "~/modules/model/type";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Skinify - Product" },
    { name: "description", content: "Premium mobile phone skin" },
  ];
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_API_URL}/models/${params.modelSlug}`,
  );
  const products: ModelType = await response.json();

  return { params, products };
}

export default function ModelSlugRoute({ loaderData }: Route.ComponentProps) {
  const { params, products } = loaderData;

  console.log(loaderData);

  return (
    <div className="mx-10 my-10">
      <section className="relative mt-40 grid grid-cols-2">
        <div className="sticky top-40 self-start">
          <img src={products.imageUrl} className="min-w-[600px]" />
        </div>

        <Card className="border-none bg-transparent">
          <CardHeader>
            <CardTitle className="font-chakra-petch text-5xl text-white">
              {products.name} Skins
            </CardTitle>
            <CardDescription className="font-chakra-petch text-white">
              Let’s get one thing straight — your {products.name} is cool. But
              not your kind of cool. Wrap your {products.name} with Exacoat’s
              premium skin – no added bulk, just flawless defense. Engineered
              for an exact, edge‑to‑edge fit.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-8">
              {products.products.map((product) => (
                <Link
                  key={product.id}
                  to={`/shop/${params.brandSlug}/${product.slug}`}
                >
                  <Card className="cursor-pointer border border-zinc-800 bg-linear-to-b from-neutral-900 to-black transition-colors duration-200 hover:border-white">
                    <CardHeader className="flex justify-between">
                      <div className="flex h-48 flex-col justify-between">
                        <CardTitle className="font-chakra-petch text-xl text-white">
                          {product.name.split("-")[1]}
                        </CardTitle>
                        <p className="text-white">{product.price}</p>
                      </div>
                      <img src={product.imageUrl} className="w-[200px]" />
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="my-40">
        <Card className="border border-zinc-800 bg-linear-to-b from-neutral-900 to-black">
          <CardContent className="flex min-h-[20vh] flex-col justify-center gap-4">
            <p className="font-chakra-petch text-center text-3xl font-bold text-white">
              Have questions about {products.name} Skins?
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
