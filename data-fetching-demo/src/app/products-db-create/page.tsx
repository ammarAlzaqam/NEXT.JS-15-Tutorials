import Product from "@/models/product";
import { redirect } from "next/navigation";

export default function AddProductPage() {
  async function createProduct(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const price = formData.get("price") as string;
    const description = formData.get("description") as string;
    await Product.create({ title, price, description });
    redirect("/products-db");
  }
  return (
    <section className="flex items-center justify-center min-h-screen">
      <form
        action={createProduct}
        className="min-w-xs md:min-w-xl p-5 bg-gray-800 rounded-lg space-y-4"
      >
        <div>
          <label className="block" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            className="w-full outline-none p-3 bg-amber-50 rounded-md text-gray-800 focus:bg-amber-100 transition"
          />
        </div>
        <div>
          <label className="block" htmlFor="price">
            price
          </label>
          <input
            id="price"
            name="price"
            type="number"
            className="w-full outline-none p-3 bg-amber-50 rounded-md text-gray-800 focus:bg-amber-100 transition"
          />
        </div>
        <div>
          <label className="block" htmlFor="description">
            description
          </label>
          <textarea
            id="description"
            name="description"
            rows={5}
            className="w-full outline-none resize-none p-3 bg-amber-50 rounded-md text-gray-800 focus:bg-amber-100 transition"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-cyan-600 hover:bg-cyan-700 transition cursor-pointer p-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
