"use client";

import { deleteProduct } from "@/actions/products";
import Link from "next/link";
import { Product } from "./page";
import { useOptimistic, useState } from "react";

export default function ProductsDetail({ products }: { products: Product[] }) {
  const [optimisticProducts, setOptimisticProducts] = useOptimistic(
    products,
    (currentProducts, productId) => {
      return currentProducts.filter((p) => p.id !== productId);
    }
  );

  const handelDeleteProduct = async (formData: FormData) => {
    const id = formData.get("id") as string;
    setOptimisticProducts(id);
    await deleteProduct(id);
  };

  return (
    <ul className="space-y-4 p-4">
      {optimisticProducts.map((p) => (
        <li
          key={p.id}
          className="p-4 bg-white shadow-md rounded-lg text-gray-700"
        >
          <h2 className="text-xl font-semibold">
            <Link href={`/products-db/${p.id}`}>{p.title}</Link>
          </h2>

          <p>{p.description}</p>
          <p className="text-lg font-medium">${p.price}</p>

          <form action={handelDeleteProduct}>
            <input type="hidden" name="id" value={p.id} />
            <button
              type="submit"
              className="py-1 px-2 cursor-pointer bg-red-500 hover:bg-red-600 transition text-white rounded-md"
            >
              Delete
            </button>
          </form>
        </li>
      ))}
    </ul>
  );
}
