import { deleteProduct } from "@/actions/products";
import connectDB from "@/libs/dbConnect";
import Product from "@/models/product";
import Link from "next/link";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export default async function ProductsDBPage() {
  await connectDB();
  const products: Product[] = await Product.find();

  return (
    <ul className="space-y-4 p-4">
      {products.map((p) => (
        <li
          key={p.id}
          className="p-4 bg-white shadow-md rounded-lg text-gray-700"
        >
          <h2 className="text-xl font-semibold">
            <Link href={`/products-db/${p.id}`}>{p.title}</Link>
          </h2>

          <p>{p.description}</p>
          <p className="text-lg font-medium">${p.price}</p>

          <form action={deleteProduct}>
            <input type="hidden" name="id" value={p.id} />
            <button type="submit" className="py-1 px-2 cursor-pointer bg-red-500 hover:bg-red-600 transition text-white rounded-md">Delete</button>
          </form>
        </li>
      ))}
    </ul>
  );
}
