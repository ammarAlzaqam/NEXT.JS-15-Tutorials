import Product from "@/models/product";
import EditProductForm from "./EditForm";
import connectDB from "@/libs/dbConnect";
import { notFound } from "next/navigation";
import mongoose from "mongoose";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  await connectDB();
  const isValidId = mongoose.isValidObjectId(id);
  if (!isValidId) notFound();
  const product = await Product.findById(id);
  if (!product) notFound();
  const plainProduct = JSON.parse(JSON.stringify(product));

  return <EditProductForm product={plainProduct} />;
}
