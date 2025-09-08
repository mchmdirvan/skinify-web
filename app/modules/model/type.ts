import type { Product } from "../products/schema";

export type ModelType = {
  id: string;
  slug: string;
  name: string;
  imageUrl: string;
  brandSlug: string;
  createdAt: string;
  updatedAt: string;
  products: Product[];
};
