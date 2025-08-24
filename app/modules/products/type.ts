export type ProductType = {
  id: string;
  slug: string;
  name: string;
  sku?: string;
  imageUrl?: string;
  stockQuantity: number;
  price: number;
  modelSlug: string;
  createdAt: string;
  updatedAt: string;
};
