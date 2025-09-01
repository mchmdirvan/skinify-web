import { Card, CardContent, CardHeader } from "~/components/ui/card";

import Iphone16 from "/iPhone-16.png";
import { Button } from "~/components/ui/button";
import type { Route } from "./+types/cart";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cart - Skinify" },
    { name: "description", content: "Premium mobile phone skin" },
  ];
}

export default function Cart() {
  const cartData = [
    {
      head: "Product",
      data: "  iPhone 16 Skins",
    },
    {
      head: "Price",
      data: "Rp. 129.000",
    },
    {
      head: "Quantity",
      data: "2",
    },
    {
      head: "Subtotal",
      data: "Rp. 258.000",
    },
  ];
  return (
    <div className="lg:mx-52 lg:my-20">
      <section>
        <Card className="lg:hidden">
          <CardContent>
            <div className="flex justify-center border-b border-neutral-800 py-5">
              <img src={Iphone16} className="w-[200px]" />
            </div>
            {cartData.map((cart) => (
              <div
                key={cart.head}
                className="grid grid-cols-2 border-b border-neutral-800 py-5"
              >
                <p className="text-sm">{cart.head}</p>
                <p className="text-sm font-semibold text-nowrap">{cart.data}</p>
              </div>
            ))}
            <Button variant="destructive" className="my-4 w-full">
              DELETE
            </Button>

            <div className="flex justify-center border-b border-neutral-800 py-5">
              <img src={Iphone16} className="w-[200px]" />
            </div>
            {cartData.map((cart) => (
              <div
                key={cart.head}
                className="grid grid-cols-2 border-b border-neutral-800 py-5"
              >
                <p className="text-sm">{cart.head}</p>
                <p className="text-sm font-semibold text-nowrap">{cart.data}</p>
              </div>
            ))}
            <Button variant="destructive" className="my-4 w-full">
              DELETE
            </Button>
          </CardContent>
        </Card>

        <Card className="hidden lg:block">
          <CardHeader className="grid grid-cols-6">
            <div></div>
            {cartData.map((cart) => (
              <p key={cart.head}>{cart.head}</p>
            ))}
            <div></div>
          </CardHeader>

          <CardContent>
            <div className="mx-10 my-5 border border-t border-neutral-800"></div>
            <div className="grid grid-cols-6 items-center">
              <div>
                <img src={Iphone16} />
              </div>
              {cartData.map((cart) => (
                <p key={cart.head} className="text-xs">
                  {cart.data}
                </p>
              ))}
              <div></div>
            </div>

            <div className="mx-10 my-5 border border-t border-neutral-800"></div>
            <div className="grid grid-cols-6 items-center">
              <div>
                <img src={Iphone16} />
              </div>
              {cartData.map((cart) => (
                <p key={cart.head} className="text-xs">
                  {cart.data}
                </p>
              ))}
              <div></div>
            </div>
          </CardContent>
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
