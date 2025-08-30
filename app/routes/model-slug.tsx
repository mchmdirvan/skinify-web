import { ShieldCheckIcon } from "lucide-react";
import type { Route } from "./+types/model-slug";
import { Link } from "react-router";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Progress } from "~/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import type { ModelType } from "~/modules/model/type";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Skinify - Product" },
    { name: "description", content: "Premium mobile phone skin" },
  ];
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_API_URL}/models/${params.modelSlug}`,
  );
  const products: ModelType = await response.json();

  return { params, products };
}

export default function ModelSlugRoute({ loaderData }: Route.ComponentProps) {
  const { params, products } = loaderData;

  const review = [
    { stars: 5, percentage: 95 },
    { stars: 4, percentage: 5 },
    { stars: 3, percentage: 0 },
    { stars: 2, percentage: 0 },
    { stars: 1, percentage: 0 },
  ];

  const reviewsData = [
    {
      author: "Yazid Hidayatullah",
      date: "June 18, 2025",
      content:
        "Pemasangannya mudah sekali, kualitas bahannya bagus sekali, warnanya cerah",
    },
    {
      author: "Thommy",
      date: "June 18, 2025",
      content:
        "Sejak kenal Skinify 4 atau 5 tahun lalu, setiap ganti handphone selalu langsung diamankan dengan exacoat... Dragon skin selalu jadi favorit utk semua gadget saya... Gagah dan berkarakter...",
    },
    {
      author: "Fahmi Mubarok",
      date: "June 18, 2025",
      content:
        "untuk webstore oke,tapi untuk pengiriman agak lama,sicepat tapi gak cepat😂",
    },
  ];

  return (
    <div className="mx-10 my-10">
      <section className="relative mt-40 grid grid-cols-2">
        <div className="sticky top-40 self-start">
          <img src={products.imageUrl} className="min-w-[600px]" />
        </div>

        <Card className="border-none bg-transparent">
          <CardHeader>
            <CardTitle className="font-chakra-petch text-5xl text-white">
              {products.name} Skins
            </CardTitle>
            <CardDescription className="font-chakra-petch text-white">
              Let’s get one thing straight — your {products.name} is cool. But
              not your kind of cool. Wrap your {products.name} with Exacoat’s
              premium skin – no added bulk, just flawless defense. Engineered
              for an exact, edge‑to‑edge fit.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="my-10 grid grid-cols-2 gap-8">
              {products.products.map((product) => (
                <Link
                  key={product.id}
                  to={`/shop/${params.brandSlug}/${product.slug}`}
                >
                  <Card className="cursor-pointer border border-zinc-800 bg-linear-to-b from-neutral-900 to-black transition-colors duration-200 hover:border-white">
                    <CardHeader className="flex justify-between">
                      <div className="flex h-48 flex-col justify-between">
                        <CardTitle className="font-chakra-petch text-xl text-white">
                          {product.name.split("-")[1]}
                        </CardTitle>
                        <p className="text-white">{product.price}</p>
                      </div>
                      <img src={product.imageUrl} className="w-[200px]" />
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="my-20 flex justify-center">
        <Tabs defaultValue="reviews">
          <TabsList>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="installation-warranty">
              Installation Warranty
            </TabsTrigger>
            <TabsTrigger value="password">FAQs</TabsTrigger>
          </TabsList>
          <TabsContent value="reviews" className="mt-5 space-y-10">
            <section>
              <p className="text-center text-xs text-amber-400">
                How we ensure the authenticity of our reviews
              </p>
              <p className="text-center text-xs text-white">
                These reviews are verified purchase reviews and cannot be
                altered or edited.
              </p>
            </section>

            <Card className="border border-zinc-800 bg-linear-to-b from-neutral-900 to-black px-14">
              <CardContent className="flex gap-10">
                <div className="flex flex-col items-center justify-center">
                  <p className="text-8xl font-semibold text-amber-400">4.9</p>
                  <p>⭐⭐⭐⭐⭐</p>
                </div>
                <div className="min-h-10 self-center border-r border-white p-0">
                  |
                </div>
                <div>
                  {review.map((rating) => (
                    <div key={rating.stars} className="flex items-center gap-4">
                      <p className="min-w-[3rem] text-nowrap text-white">
                        {rating.stars} Star
                      </p>
                      <Progress value={rating.percentage} />
                      <p className="text-white">{rating.percentage}%</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <section>
              <p className="my-5 text-xs text-white">1-3 of 1312 Reviews</p>
              <div className="space-y-4">
                {reviewsData.map((review) => (
                  <Card className="max-w-2xl border border-zinc-800 bg-linear-to-b from-neutral-900 to-black">
                    <CardContent>
                      <div className="flex justify-between">
                        <div>
                          <p className="font-semibold text-white">
                            {review.author}
                          </p>
                          <p>⭐⭐⭐⭐⭐</p>
                        </div>
                        <p className="text-white">{review.date}</p>
                      </div>
                      <div className="pt-5 text-xs text-white">
                        {review.content}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </TabsContent>
          <TabsContent value="installation-warranty">
            <Card className="max-w-2xl border border-zinc-800 bg-linear-to-b from-neutral-900 to-black px-10 py-14">
              <CardHeader>
                <div className="flex justify-center">
                  <ShieldCheckIcon className="text-amber-400" size={60} />
                </div>
              </CardHeader>
              <CardContent className="space-y-5">
                <p className="text-center text-sm text-white">
                  We are very confident about how easy the skin installation is
                  for iPhone 16. Don’t trust our word, see the reviews on the
                  previous tab 👈🏻
                </p>
                <p className="text-center text-sm text-white">
                  Unlike screen protectors or other skins that can only be
                  applied once, our skin can be removed and applied multiple
                  times if it doesn’t fit.
                </p>
                <p className="text-center text-sm text-white">
                  If your skin is damaged on installation within 2 days after
                  the items arrived, we will send you a new one.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <section className="mx-60">
        <p className="font-chakra-petch text-center text-xs text-white">
          You might think that a iPhone 16 case provides enough protection.
          However, the real threat to your iPhone 16 comes from dust, tiny sand
          particles, or other small debris that get trapped inside the case and
          end up scratching your device in silence. Exacoat’s iPhone 16 skin
          adds an extra layer of protection, and it is case-friendly.
        </p>
      </section>

      <section className="my-40">
        <Card className="border border-zinc-800 bg-linear-to-b from-neutral-900 to-black">
          <CardContent className="flex min-h-[20vh] flex-col justify-center gap-4">
            <p className="font-chakra-petch text-center text-3xl font-bold text-white">
              Have questions about {products.name} Skins?
            </p>
            <div className="flex justify-center gap-1 text-white">
              <a href="tel:+6289755556000" className="hover:underline">
                +62 897 555 6000
              </a>
              <p>|</p>
              <a href="mailto:skinify@skinify.com" className="hover:underline">
                skinify@skinify.com
              </a>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
