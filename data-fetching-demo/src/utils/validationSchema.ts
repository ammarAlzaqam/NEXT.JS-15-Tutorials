import z from "zod";

export const createProductSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be at least 3 characters long" })
    .max(100, { message: "Title must not exceed 100 characters" }),

  price: z
    .string()
    .min(1, { message: "Price is required" })
    .refine((val) => !isNaN(Number(val)), {
      message: "Price must be a number",
    })
    .transform((val) => Number(val))
    .refine((val) => val > 0, { message: "Price must be a positive number" }),

  description: z
    .string()
    .max(1000, { message: "Description must not exceed 1000 characters" })
    .optional(),
});
