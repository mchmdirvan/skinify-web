import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Skinify" },
    { name: "description", content: "Premium mobile phone skin" },
  ];
}

export default function Home() {
  return (
    <div>
      <h1>Skinify</h1>
    </div>
  );
}
