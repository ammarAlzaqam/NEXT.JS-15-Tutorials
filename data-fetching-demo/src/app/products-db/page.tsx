import connectDB from "@/libs/dbConnect";
import Product from "@/models/product";
import ProductsDetail from "./product-detail";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export default async function ProductsDBPage() {
  await connectDB();
  const products: Product[] = await Product.find();

  const plainProducts = products.map((p) => JSON.parse(JSON.stringify(p)));
  return <ProductsDetail products={plainProducts} />;
}
