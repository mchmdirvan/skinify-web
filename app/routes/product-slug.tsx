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

export function meta({ loaderData }: Route.MetaArgs) {
  return [
    { title: `${loaderData?.name} - Skinify` },
    { name: "description", content: "Premium mobile phone skin" },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_API_URL}/products/${params.productSlug}`,
  );
  const product: ProductType = await response.json();

  return product;
}

export default function ProductSlugRoute({ loaderData }: Route.ComponentProps) {
  const product = loaderData;

  const number = product.price;
  const formatNumber = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);

  return (
    <div className="grid gap-4 py-10 md:grid-cols-2 lg:px-40">
      <img src={product.imageUrl} className="lg:max-h-[400px]" />
      <Card className="border-none bg-transparent">
        <CardHeader>
          <CardTitle className="font-chakra-petch text-2xl lg:text-5xl">
            {product.name.split("-")[0]}{" "}
          </CardTitle>
          <CardDescription className="font-chakra-petch lg:text-xl">
            {product.name.split("-")[1]} - {formatNumber}
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
