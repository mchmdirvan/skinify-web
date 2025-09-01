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
  return (
    <div className="mx-52 my-20">
      <section>
        <Card>
          <CardHeader className="grid grid-cols-6">
            <div></div>
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
            <div></div>
          </CardHeader>

          <CardContent>
            <div className="mx-10 my-5 border border-t border-neutral-800"></div>
            <div className="grid grid-cols-6 items-center">
              <div>
                <img src={Iphone16} />
              </div>
              <p className="font-semibold">iPhone 16 Skins</p>
              <p className="text-xs">Rp. 129.000</p>
              <p className="text-xs">2</p>
              <p className="text-xs">Rp. 258.000</p>
              <div></div>
            </div>

            <div className="mx-10 my-5 border border-t border-neutral-800"></div>
            <div className="grid grid-cols-6 items-center">
              <div>
                <img src={Iphone16} />
              </div>
              <p className="font-semibold">iPhone 16 Skins</p>
              <p className="text-xs">Rp. 129.000</p>
              <p className="text-xs">2</p>
              <p className="text-xs">Rp. 258.000</p>
              <div></div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <p className="font-chakra-petch my-10 text-center">
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
