import z from "zod";

import { AuthRegisterSchema } from "../auth/schema";
import { ProductSchema } from "../products/schema";

export const CartItemSchema = z.object({
  id: z.string(),
  quantity: z.number(),

  productId: z.string(),
  product: ProductSchema,

  cardId: z.string(),

  createdAt: z.date(),
  updatedAt: z.date(),
});

export const CartSchema = z.object({
  id: z.string(),

  items: z.array(CartItemSchema),

  userId: z.string(),
  user: AuthRegisterSchema.optional(),

  createdAt: z.date(),
  updatedAt: z.date(),
});

export const AddCartItemSchema = z.object({
  productId: z.string(),
  quantity: z.number().default(1),
});

export type Cart = z.infer<typeof CartSchema>;
