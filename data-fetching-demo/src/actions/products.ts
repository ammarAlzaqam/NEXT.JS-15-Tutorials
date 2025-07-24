"use server";

import connectDB from "@/libs/dbConnect";
import Product from "@/models/product";
import { createProductSchema } from "@/utils/validationSchema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type Errors = {
  title?: string;
  price?: string;
  description?: string;
};

export type FormState = {
  errors: Errors;
};

//! Add new product .
export async function createProduct(_prevState: FormState, formData: FormData) {
  const title = formData.get("title") as string;
  const price = formData.get("price") as string;
  const description = formData.get("description") as string;
  const productSchema = createProductSchema.safeParse({
    title,
    price,
    description,
  });
  if (!productSchema.success) {
    const errors: Errors = {};
    productSchema.error.issues.forEach((issue) => {
      const field = issue.path[0] as keyof Errors;
      errors[field] = issue.message;
    });
    return { errors };
  }
  await connectDB();
  await Product.create({ title, price, description });
  redirect("/products-db");
}

//! Update product by id .
export async function editProduct(
  id: number,
  _prevState: FormState,
  formData: FormData
) {
  const title = formData.get("title") as string;
  const price = formData.get("price") as string;
  const description = formData.get("description") as string;
  const productSchema = createProductSchema.safeParse({
    title,
    price,
    description,
  });
  if (!productSchema.success) {
    const errors: Errors = {};
    productSchema.error.issues.forEach((issue) => {
      const field = issue.path[0] as keyof Errors;
      errors[field] = issue.message;
    });
    return { errors };
  }
  await connectDB();
  await Product.updateOne({ _id: id }, { title, price, description });
  redirect("/products-db");
}

//! Delete product by id .
export async function deleteProduct(formData: FormData) {
  const id = formData.get("id") as string;
  await connectDB();
  await Product.deleteOne({ _id: id });
  revalidatePath("/products-db");
}
