import type { BrandType } from "~/modules/brand/type";
import type { Route } from "./+types/model";

import { Card, CardHeader, CardTitle } from "~/components/ui/card";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Skinify - Model" },
    { name: "description", content: "Premium mobile phone skin" },
  ];
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const respon = await fetch(
    `${import.meta.env.VITE_BACKEND_API_URL}/brands/${params.slug}`,
  );
  const models: BrandType = await respon.json();

  return models;
}

export default function Model({ loaderData }: Route.ComponentProps) {
  const models = loaderData;

  return (
    <div className="flex justify-between px-40 py-10">
      <h2 className="text-5xl font-bold text-white">iPhone skins</h2>

      <div className="flex min-w-2xl flex-col gap-8">
        {models.models.map((model) => (
          <Link key={model.id} to={`/model/${model.slug}`}>
            <Card className="w-full max-w-2xl cursor-pointer overflow-hidden border border-zinc-800 bg-linear-to-b from-neutral-900 to-black transition-colors duration-200 hover:border-white">
              <CardHeader className="flex justify-between">
                <div className="flex h-80 flex-col justify-between">
                  <CardTitle className="text-3xl text-white">
                    {model.name}
                  </CardTitle>
                  <p className="text-white">Premium Skins</p>
                </div>
                <img src={model.imageUrl} className="w-[300px]" />
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
