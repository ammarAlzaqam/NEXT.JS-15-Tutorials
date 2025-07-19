"use client";
import { usePathname } from "next/navigation";

export default function RootNotFoundPage() {
  const pathname = usePathname();
  console.log(pathname.split("/"));
  const productId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];
  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className="text-center shadow-md shadow-gray-700 p-8 rounded-3xl">
        <h2 className="font-semibold text-3xl text-red-500">
          Review {reviewId} not found for product {productId}
        </h2>
      </div>
    </section>
  );
}
