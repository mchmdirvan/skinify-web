import type { ProductType } from "../products/type";

export type ModelType = {
  id: string;
  slug: string;
  name: string;
  imageUrl: string;
  brandSlug: string;
  createdAt: string;
  updatedAt: string;
  products: ProductType[];
};
