import { z } from "zod";

export const ProductSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  brand: z.string().optional().nullable(),
  sku: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  imageUrl: z.string(),
  stockQuantity: z.number(),
  price: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const ProductsSchema = z.array(ProductSchema);

export const ProductsSlugSchema = z.object({
  slug: z.string(),
});

export type Product = z.infer<typeof ProductSchema>;
