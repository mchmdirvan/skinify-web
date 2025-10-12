import type { Route } from "./+types/brand-slug";
import { Fragment } from "react/jsx-runtime";
import { Link } from "react-router";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import type { BrandType } from "~/modules/brand/type";

export function meta({ loaderData }: Route.MetaArgs) {
  return [
    { title: ` ${loaderData?.models.name} - Skinify` },
    { name: "description", content: "Premium mobile phone skin" },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  const response = await fetch(
    `${process.env.BACKEND_API_URL}/brands/${params.brandSlug}`,
  );
  const models: BrandType = await response.json();

  return { params, models };
}

export default function BrandSlugRoute({ loaderData }: Route.ComponentProps) {
  const { params, models } = loaderData;

  return (
    <Fragment>
      <section className="relative flex flex-col justify-between gap-10 lg:mt-40 lg:gap-40 xl:flex-row">
        <h2 className="font-chakra-petch top-40 text-center text-6xl font-bold lg:text-7xl xl:sticky xl:self-start">
          {models.name} Skins
        </h2>

        <div className="grid gap-4 md:grid-cols-2 md:gap-8">
          {models.models.map((model) => (
            <Link
              key={model.id}
              to={`/shop/${params.brandSlug}/${model.slug}`}
              className="col-span-2 md:col-span-1"
            >
              <Card className="w-full cursor-pointer transition-colors duration-200 hover:border-white xl:min-w-sm">
                <CardHeader className="flex justify-between">
                  <div className="flex h-20 flex-col justify-between lg:h-48">
                    <CardTitle className="font-chakra-petch text-xl">
                      {model.name}
                    </CardTitle>
                    <p className="text-xs">Premium Skins</p>
                  </div>
                  <img
                    src={model.imageUrl}
                    className="w-[100px] lg:w-[200px]"
                  />
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <Card>
          <CardContent className="flex min-h-[20vh] flex-col justify-center gap-4">
            <CardTitle className="font-chakra-petch text-center text-xl font-bold">
              Can't find your device?
            </CardTitle>
            <CardDescription className="flex justify-center gap-1 text-xs text-nowrap">
              <a href="tel:+6289755556000" className="hover:underline">
                +62 897 555 6000
              </a>
              <p>|</p>
              <a href="mailto:skinify@skinify.com" className="hover:underline">
                skinify@skinify.com
              </a>
            </CardDescription>
          </CardContent>
        </Card>
      </section>
    </Fragment>
  );
}
