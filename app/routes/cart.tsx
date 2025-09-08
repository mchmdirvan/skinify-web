import { destroySession, getSession } from "~/session.server";
import type { Route } from "./+types/cart";
import { TrashIcon } from "lucide-react";
import { redirect } from "react-router";

import { Card, CardContent, CardHeader } from "~/components/ui/card";
import type { Cart } from "~/modules/cart/schema";
import { Button } from "~/components/ui/button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cart - Skinify" },
    { name: "description", content: "Premium mobile phone skin" },
  ];
}

export async function loader({ request }: Route.LoaderArgs) {
  const session = await getSession(request.headers.get("Cookie"));

  if (!session.has("token")) {
    return redirect("/login");
  }

  const token = session.get("token");

  const response = await fetch(`${process.env.VITE_BACKEND_API_URL}/cart`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    session.flash("error", "Failed to get cart");
    return redirect("/login", {
      headers: { "Set-Cookie": await destroySession(session) },
    });
  }

  const cart: Cart = await response.json();

  return cart;
}

export default function Cart({ loaderData }: Route.ComponentProps) {
  const carts = loaderData;

  const table = [
    {
      head: "Product",
    },
    {
      head: "Price",
    },
    {
      head: "Quantity",
    },
    {
      head: "Subtotal",
    },
  ];

  return (
    <div className="lg:mx-52 lg:my-20">
      <section>
        {/* Desktop */}
        <Card className="hidden lg:block">
          <CardHeader className="grid grid-cols-6">
            <div></div>
            {table.map((item) => (
              <p key={item.head}>{item.head}</p>
            ))}
            <div></div>
          </CardHeader>

          {carts.items.map((cart) => {
            return (
              <CardContent key={cart.product.id}>
                <div className="mx-10 my-5 border border-t border-neutral-800"></div>
                <div className="grid grid-cols-6 items-center">
                  <img src={cart.product.imageUrl} className="w-[200px]" />
                  <div>{cart.product.name.split("-")[0]}</div>
                  <div>Rp {cart.product.price.toLocaleString("id-ID")}</div>
                  <div>{cart.quantity}</div>
                  <div>Rp {cart.product.price.toLocaleString("id-ID")}</div>
                  <Button variant="destructive" size="icon" className="">
                    <TrashIcon />
                  </Button>
                </div>
              </CardContent>
            );
          })}
        </Card>

        {/* Mobile */}
        <Card className="lg:hidden">
          {carts.items.map((cart) => {
            return (
              <CardContent key={cart.product.id}>
                <div className="flex justify-center border-b border-neutral-800 py-5">
                  <img src={cart.product.imageUrl} className="w-[200px]" />
                </div>

                <div className="grid grid-cols-2 border-b border-neutral-800 py-5 text-sm font-semibold text-nowrap">
                  <p className="text-sm">Product</p>
                  <div>{cart.product.name.split("-")[0]}</div>
                </div>

                <div className="grid grid-cols-2 border-b border-neutral-800 py-5 text-sm font-semibold text-nowrap">
                  <p className="text-sm">Price</p>
                  <div>Rp {cart.product.price.toLocaleString("id-ID")}</div>
                </div>

                <div className="grid grid-cols-2 border-b border-neutral-800 py-5 text-sm font-semibold text-nowrap">
                  <p className="text-sm">Quantity</p>
                  <div>{cart.quantity}</div>
                </div>

                <div className="grid grid-cols-2 border-b border-neutral-800 py-5 text-sm font-semibold text-nowrap">
                  <p className="text-sm">Subtotal</p>
                  <div>Rp {cart.product.price.toLocaleString("id-ID")}</div>
                </div>

                <Button variant="destructive" className="my-4 w-full">
                  DELETE
                </Button>
              </CardContent>
            );
          })}
        </Card>
      </section>

      <section>
        <p className="font-chakra-petch my-10 text-center hover:underline">
          Have a coupon/gift code? click here
        </p>
      </section>

      <section>
        <Button className="font-chakra-petch min-w-full cursor-pointer bg-yellow-500 transition-colors duration-300 hover:bg-yellow-400">
          PROCEED TO CHECKOUT
        </Button>
      </section>
    </div>
  );
}
