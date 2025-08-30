import type { ProductType } from "~/modules/products/type";
import type { Route } from "./+types/product-slug";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Skinify - Detail Product" },
    { name: "description", content: "Premium mobile phone skin" },
  ];
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_API_URL}/products/${params.productSlug}`,
  );
  const product: ProductType = await response.json();

  return product;
}

export default function ProductSlugRoute({ loaderData }: Route.ComponentProps) {
  const product = loaderData;
  console.log(loaderData);

  const number = product.price;
  const formatNumber = new Intl.NumberFormat("id-ID").format(number);

  return (
    <div className="grid grid-cols-2 px-40 py-10">
      <img src={product.imageUrl} className="max-h-[400px]" />
      <Card className="border-none bg-transparent">
        <CardHeader>
          <CardTitle className="font-chakra-petch text-5xl text-white">
            {product.name.split("-")[0]}{" "}
          </CardTitle>
          <CardDescription className="font-chakra-petch text-xl text-white">
            {product.name.split("-")[1]} - IDR {formatNumber}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="min-w-full border border-zinc-500 bg-yellow-500 py-5">
            ADD TO CART
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
