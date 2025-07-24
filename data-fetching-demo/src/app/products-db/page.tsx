import connectDB from "@/libs/dbConnect";
import Product from "@/models/product";
import ProductsDetail from "./product-detail";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

async function getProducts(query: string | undefined) {
  await connectDB();
  const filter = query
    ? {
        $or: [
          { title: { $regex: query, $options: "i" } },
          { description: { $regex: query, $options: "i" } },
        ],
      }
    : {};

  return Product.find(filter);
}

export default async function ProductsDBPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;
  const products = await getProducts(query);

  if (products.length === 0) return <ProductsNotFound />;
  
  const plainProducts = products.map((p) => JSON.parse(JSON.stringify(p)));
  return <ProductsDetail products={plainProducts} />;
}

//! not found any product by search query ((case)) .
function ProductsNotFound() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-center text-gray-500">
      <p className="text-2xl font-semibold mb-2">No Products Found</p>
      <p className="text-sm text-gray-400">
        Try adjusting your search or check back later.
      </p>
    </div>
  );
}
