import type { Route } from "./+types/home";

import { Card, CardHeader, CardTitle } from "~/components/ui/card";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Skinify - iPhone" },
    { name: "description", content: "iPhone Premium mobile phone skin" },
  ];
}

export async function clientLoader({}: Route.ClientLoaderArgs) {
  const respon = await fetch(
    `${import.meta.env.VITE_BACKEND_API_URL}/products`,
  );
  const products = await respon.json();

  return products;
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const products = loaderData;

  return (
    <div className="flex justify-between px-40 py-10">
      <h2 className="text-5xl font-bold text-white">iPhone skins</h2>

      <div className="min-w-2xl space-y-10">
        {products.map((product: any) => (
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
        ))}
      </div>
    </div>
  );
}
