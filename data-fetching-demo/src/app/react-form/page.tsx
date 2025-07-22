"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ReactForm() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handelFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      setLoading(true);
      e.preventDefault();
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/react-form/api`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title, price, description }),
        }
      );
      const data = await response.json();
      if (!response.ok) return toast.error(data.message);
      router.push("/products-db");
      toast.success(data.message);
      console.log(data.data);
    } catch (e) {
      console.error(e);
      toast.error("Failed to create product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handelFormSubmit}
        className="min-w-xs md:min-w-xl p-5 bg-gray-800 rounded-lg space-y-4"
      >
        <div>
          <label className="block" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            value={price}
            onChange={(e) => setPrice(e.target.value)}
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
            className="w-full outline-none resize-none p-3 bg-amber-50 rounded-md text-gray-800 focus:bg-amber-100 transition"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`text-center mt-5 w-full bg-blue-500 text-white p-1 cursor-pointer hover:bg-cyan-600 transition rounded-sm ${
            loading && "bg-gray-700 hover:bg-gray-800"
          }`}
        >
          {loading ? (
            <div className="flex justify-center items-center">
              <i className="animate-spin w-6 h-6 rounded-full border-2 border-t-transparent border-white"></i>{" "}
            </div>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </section>
  );
}
