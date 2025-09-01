import {
  BrickWallIcon,
  ClockArrowUpIcon,
  HandIcon,
  ScanHeartIcon,
  ShieldCheckIcon,
  ShieldUserIcon,
} from "lucide-react";
import type { Route } from "./+types/home";
import { Link } from "react-router";
import Autoplay from "embla-carousel-autoplay";

import QualityL from "/quality-l.jpg";
import QualityR from "/quality-r.jpg";
import HeroImage from "/hero.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Skinify" },
    { name: "description", content: "Premium mobile phone skin" },
  ];
}

export default function Home() {
  const featureCards = [
    {
      icon: ClockArrowUpIcon,
      title: "Last more than 3+ Years",
      description:
        "With the 3M material, our skins could last more than 3+ years. Your gadget will look the same as the time you applied the skin.",
    },
    {
      icon: HandIcon,
      title: "Bye, permanent stains.",
      description:
        "Device skins prevent stains caused by fungus, which forms from dust and moisture entering the gadget's interior. Skins keep everything out.",
    },
    {
      icon: ScanHeartIcon,
      title: "No residue upon removal",
      description:
        "By using our skin, your gadget will look the same as the time you applied the skin. Removal is guaranteed to leave behind zero adhesive residue.",
    },
    {
      icon: ShieldCheckIcon,
      title: "Installation Guarantee",
      description:
        "We offer an exclusive 2-day installation warranty for peace of mind. If you make a mistake during installation, we'll send a replacement for only the shipping fee.",
    },
    {
      icon: ShieldUserIcon,
      title: "Precision Guarantee",
      description:
        "Every skin is crafted with obsessive attention in detail by our experienced Research and Development team, with industrial grade cutting machine.",
    },
    {
      icon: BrickWallIcon,
      title: "Premium Materials",
      description:
        "Made with high-quality vinyl that offers superior scratch resistance and maintains its color vibrancy over time, ensuring your device always looks premium.",
    },
  ];

  const reviewCards = [
    {
      rating: 5,
      content:
        "Really cool stuff, suitable for millennials. Fast delivery. At first I was hesitant because this was my first time buying goods directly from the website.",
      author: "Adecya",
      authorInfo: "verified customer",
    },
    {
      rating: 5,
      content:
        "The color and material are really good. I've been using it for 3 years, it's still good and protects my cellphone, plus there's a guarantee that if it's installed incorrectly, it will be sent back in a package, highly recommend.",
      author: "Fahmi",
      authorInfo: "verified customer",
    },
    {
      rating: 5,
      content:
        "I honestly had no idea I needed this before, and I now find it impossible to think about using my devices without Exacoat. It's beyond greatness in terms of precision and material wise.",
      author: "Edwin Yang",
      authorInfo: "@edwinwg | digital creator",
    },
    {
      rating: 5,
      content:
        "Amazing quality and perfect fit! The installation was surprisingly easy and the skin feels incredibly durable. My phone looks brand new even after months of use.",
      author: "Sarah Chen",
      authorInfo: "verified customer",
    },
    {
      rating: 5,
      content:
        "Best investment for my device protection. The precision cutting is incredible - every port and camera cutout is perfectly aligned. Customer service was also top-notch when I had questions.",
      author: "Marcus Rodriguez",
      authorInfo: "tech enthusiast",
    },
    {
      rating: 5,
      content:
        "I've tried many brands before but nothing comes close to this quality. The material feels premium and the adhesive is strong but removable without residue. Will definitely order again!",
      author: "Jennifer Park",
      authorInfo: "@jenniferreviews | product reviewer",
    },
  ];

  return (
    <div className="space-y-10">
      <img
        src={HeroImage}
        className="min-h-[80vh] w-full rounded-xl border border-zinc-800 object-cover lg:max-h-[80vh]"
      />

      <section>
        <Card>
          <CardHeader className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <CardTitle className="font-chakra-petch text-xs lg:text-base">
              The first and the only skin brand offering both an Installation
              Guarantee and 30-Day Money Back Guarantee.
            </CardTitle>
            <Button className="min-w-full rounded-md bg-amber-400 hover:bg-white hover:text-neutral-800 md:min-w-sm">
              <Link to="/shop" className="w-full">
                SHOP ALL
              </Link>
            </Button>
          </CardHeader>
        </Card>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="space-y-8">
          <Card className="py-14">
            <CardHeader>
              <CardTitle className="font-chakra-petch text-2xl text-amber-400 lg:text-5xl">
                Made with Quality
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-justify text-xs lg:text-sm">
              <p>
                All products are made with an obsessive attention to detail in
                order to ensure the highest quality possible.
              </p>
              <p>
                No aspect is ever overlooked – from the sourcing of the finest
                materials to the most minute details of creation.
              </p>
            </CardContent>
          </Card>

          <img
            src={QualityL}
            className="max-h-[60vh] min-w-full rounded-xl border border-zinc-800 object-cover"
          />
        </div>
        <Card>
          <img
            src={QualityR}
            className="min-h-full rounded-xl object-cover px-5 xl:max-h-[90vh]"
          />
        </Card>
      </section>

      <section>
        <h2 className="font-chakra-petch py-5 text-center text-xl md:text-3xl lg:text-5xl">
          The ultimate protection for your device.
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((featureCard) => {
            return (
              <Card className="max-w-md" key={featureCard.title}>
                <CardHeader className="mx-5 flex min-h-[30vh] items-center justify-center rounded-2xl bg-radial-[at_100%_10%] from-black to-amber-500 to-250%">
                  <featureCard.icon className="text-yellow-500" size={60} />
                </CardHeader>
                <CardContent className="space-y-2">
                  <CardTitle className="font-chakra-petch text-xl">
                    {featureCard.title}
                  </CardTitle>
                  <p className="text-justify text-xs">
                    {featureCard.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section>
        <Card>
          <CardHeader className="lg:py-10">
            <CardTitle className="font-chakra-petch text-center text-xl lg:text-5xl">
              Our Reviews
            </CardTitle>
          </CardHeader>

          <CardContent className="px-8 md:px-20 lg:pb-10">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
              className="w-full text-black"
            >
              <CarouselContent>
                {reviewCards.map((reviewCard, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <Card className="bg-neutral-800">
                      <CardContent className="flex flex-col items-center justify-center gap-4">
                        <p>⭐⭐⭐⭐⭐</p>
                        <p className="text-center text-xs">
                          {reviewCard.content}
                        </p>
                        <div>
                          <p className="text-center text-xs font-bold">
                            {reviewCard.author}
                          </p>
                          <p className="text-center text-xs">
                            {reviewCard.authorInfo}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
