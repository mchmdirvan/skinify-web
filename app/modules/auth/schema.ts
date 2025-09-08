import { z } from "zod";

export const AuthRegisterSchema = z.object({
  email: z.string(),
  username: z.string(),
  fullName: z.string(),
  password: z.string(),
});

export const AuthLoginSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export const AuthLoginSuccessSchema = z.object({
  token: z.string(),
});

export const AuthMeSchema = z.object({
  id: z.string(),
  email: z.string(),
  username: z.string(),
  fullName: z.string(),
  password: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});
