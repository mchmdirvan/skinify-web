import type { ProductType } from "~/modules/products/type";
import type { Route } from "./+types/detail-product";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Skinify - Detail Product" },
    { name: "description", content: "Premium mobile phone skin" },
  ];
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const respon = await fetch(
    `${import.meta.env.VITE_BACKEND_API_URL}/products/${params.slug}`,
  );
  const product: ProductType = await respon.json();

  return product;
}

export default function DetailProduct({ loaderData }: Route.ComponentProps) {
  const product = loaderData;
  const number = product.price;
  const formatNumber = new Intl.NumberFormat("de-DE").format(number);

  return (
    <div className="flex justify-between px-40 py-10">
      <img src={product.imageUrl} className="max-h-[400px]" />
      <div className="flex min-w-2xl flex-col gap-8">
        <h2 className="text-5xl font-bold text-white">{product.name}</h2>
        <p className="text-white">
          Let’s get one thing straight — your {product.name} is cool. But not
          your kind of cool. Wrap your {product.name} with Exacoat’s premium
          skin – no added bulk, just flawless defense. Engineered for an exact,
          edge‑to‑edge fit.
        </p>
        <p className="text-white">IDR {formatNumber}</p>
      </div>
    </div>
  );
}
