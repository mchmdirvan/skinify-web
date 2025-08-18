import type { Route } from "./+types/home";

import { Card, CardHeader, CardTitle } from "~/components/ui/card";

import Iphone from "../../public/iPhone-16-Pro-Body.png";
import Samsung from "../../public/Galaxy-S25-Ultra-Body.png";
import Xiaomi from "../../public/Xiaomi-15-Ultra-Body.png";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Skinify" },
    { name: "description", content: "Premium mobile phone skin" },
  ];
}

export async function clientLoader({}: Route.ClientLoaderArgs) {
  const respon = await fetch(
    `${import.meta.env.VITE_BACKEND_API_URL}/products`,
  );
  const products = await respon.json();
  console.log({ products });
  return products;
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const products = loaderData;
  return (
    <div className="flex justify-between px-40 py-10">
      <h2 className="text-5xl font-bold text-white">Shop</h2>

      <div className="min-w-2xl space-y-10">
        <Card className="w-full max-w-2xl overflow-hidden border border-zinc-800 bg-linear-to-b from-neutral-900 to-black">
          <CardHeader className="flex justify-between">
            <div className="flex min-h-full flex-col justify-between">
              <CardTitle className="text-3xl text-white">iPhone</CardTitle>
              <p className="text-white">Premium Skins</p>
            </div>
            <img src={Iphone} className="w-[300px]" />
          </CardHeader>
        </Card>

        <Card className="w-full max-w-2xl overflow-hidden border border-zinc-800 bg-linear-to-b from-neutral-900 to-black">
          <CardHeader className="flex justify-between">
            <div className="flex min-h-full flex-col justify-between">
              <CardTitle className="text-3xl text-white">Samsung</CardTitle>
              <p className="text-white">Premium Skins</p>
            </div>
            <img src={Samsung} className="w-[300px]" />
          </CardHeader>
        </Card>

        <Card className="w-full max-w-2xl overflow-hidden border border-zinc-800 bg-linear-to-b from-neutral-900 to-black">
          <CardHeader className="flex justify-between">
            <div className="flex min-h-full flex-col justify-between">
              <CardTitle className="text-3xl text-white">Xiaomi</CardTitle>
              <p className="text-white">Premium Skins</p>
            </div>
            <img src={Xiaomi} className="w-[300px]" />
          </CardHeader>
        </Card>
      </div>

      {/* <ul>
        {products.map((product: any) => {
          return <li key={product.id}>{product.name}</li>;
        })}
      </ul> */}
    </div>
  );
}
