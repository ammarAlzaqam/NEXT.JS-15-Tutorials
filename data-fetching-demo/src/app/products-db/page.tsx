import connectDB from "@/libs/dbConnect";
import Product from "@/models/product";

type Product = {
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
          <h2 className="text-xl font-semibold">{p.title}</h2>
          <p>{p.description}</p>
          <p className="text-lg font-medium">${p.price}</p>
        </li>
      ))}
    </ul>
  );
}
