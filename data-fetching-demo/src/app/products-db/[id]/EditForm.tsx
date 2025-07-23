"use client"

import { Product } from "../page";
import { editProduct, FormState } from "@/actions/products";
import { useActionState } from "react";

export default function EditProductForm({ product }: { product: Product }) {
  const initialState: FormState = {
    errors: {},
  };

  const [state, formAction, isPending] = useActionState(
    editProduct.bind(null, product.id),
    initialState
  );
  return (
    <section className="flex items-center justify-center min-h-screen">
      <form
        action={formAction}
        className="min-w-xs md:min-w-xl p-5 bg-gray-800 rounded-lg space-y-4"
      >
        <div>
          <label className="block" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            name="title"
            defaultValue={product.title}
            type="text"
            className="w-full outline-none p-3 bg-amber-50 rounded-md text-gray-800 focus:bg-amber-100 transition"
          />
          {state.errors.title && (
            <p className="text-red-500">{state.errors.title}</p>
          )}
        </div>
        <div>
          <label className="block" htmlFor="price">
            price
          </label>
          <input
            id="price"
            name="price"
            defaultValue={product.price}
            type="number"
            className="w-full outline-none p-3 bg-amber-50 rounded-md text-gray-800 focus:bg-amber-100 transition [appearance: textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
          {state.errors.price && (
            <p className="text-red-500">{state.errors.price}</p>
          )}
        </div>
        <div>
          <label className="block" htmlFor="description">
            description
          </label>
          <textarea
            id="description"
            name="description"
            defaultValue={product.description ?? ""}
            rows={5}
            className="w-full outline-none resize-none p-3 bg-amber-50 rounded-md text-gray-800 focus:bg-amber-100 transition"
          ></textarea>
          {state.errors.description && (
            <p className="text-red-500">{state.errors.description}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={isPending}
          className={`text-center mt-5 w-full bg-blue-500 text-white p-1 cursor-pointer hover:bg-cyan-600 transition rounded-sm disabled:bg-gray-700 disabled:cursor-no-drop`}
        >
          {isPending ? (
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
