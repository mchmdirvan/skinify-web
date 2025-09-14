import type { Route } from "./+types/product-slug";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import type { Product } from "~/modules/products/schema";
import { Form, redirect } from "react-router";
import { destroySession, getSession } from "~/session.server";
import type { User } from "~/modules/user/type";
import type { AddCartItem } from "~/modules/cart/schema";

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
  const product: Product = await response.json();

  return product;
}

export async function action({ request }: Route.ActionArgs) {
  const session = await getSession(request.headers.get("Cookie"));

  if (!session.has("token")) {
    return redirect("/login");
  }

  const token = session.get("token");

  const formData = await request.formData();

  const addCartItemData: AddCartItem = {
    productId: String(formData.get("productId")),
    quantity: Number(formData.get("quantity")),
  };

  const response = await fetch(
    `${process.env.VITE_BACKEND_API_URL}/cart/items `,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(addCartItemData),
    },
  );
  if (!response.ok) {
    session.flash("error", "Failed to add item to cart");
    return redirect("/login", {
      headers: { "Set-Cookie": await destroySession(session) },
    });
  }

  return redirect("/cart");
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
          <Form method="post">
            <input type="hidden" name="productId" defaultValue={product.id} />
            <input type="hidden" name="quantity" defaultValue={1} />
            <Button
              type="submit"
              className="min-w-full border border-zinc-500 bg-yellow-500 py-5"
            >
              ADD TO CART
            </Button>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
