import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Skinify" },
    { name: "description", content: "Premium mobile phone skin" },
  ];
}

export async function clientLoader({}: Route.ClientLoaderArgs) {
  const respon = await fetch(`http://localhost:3000/products`);
  const products = await respon.json();
  console.log({ products });
  return products;
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const products = loaderData;
  return (
    <div>
      <h1>Skinify</h1>
      <ul>
        {products.map((product: any) => {
          return <li key={product.id}>{product.name}</li>;
        })}
      </ul>
    </div>
  );
}
