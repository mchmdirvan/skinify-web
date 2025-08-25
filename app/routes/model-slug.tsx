import type { Route } from "./+types/model-slug";
import { Link } from "react-router";

import { Card, CardHeader, CardTitle } from "~/components/ui/card";
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

  return (
    <div className="flex justify-between px-40 py-10">
      <h2 className="text-5xl font-bold text-white">{products.name} skins</h2>

      <div className="flex min-w-2xl flex-col gap-8">
        {products.products.map((product) => (
          <Link
            key={product.id}
            to={`/${params.brandSlug}/${params.modelSlug}/${product.slug}`}
          >
            <Card className="w-full max-w-2xl cursor-pointer overflow-hidden border border-zinc-800 bg-linear-to-b from-neutral-900 to-black transition-colors duration-200 hover:border-white">
              <CardHeader className="flex justify-between">
                <div className="flex h-80 flex-col justify-between">
                  <CardTitle className="text-3xl text-white">
                    {product.name}
                  </CardTitle>
                  <p className="text-white">Premium Skins</p>
                </div>
                <img src={product.imageUrl} className="w-[300px]" />
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
