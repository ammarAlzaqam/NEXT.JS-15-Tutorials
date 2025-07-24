import Form from "next/form";

export default function Search() {
  return (
    <Form action="/products-db" className="flex gap-2 ">
      <input
        type="text"
        name="query"
        placeholder="Search product"
        className="p-4 bg-white rounded-md outline-none text-gray-800 focus:bg-cyan-50"
      />
      <button type="submit" className="bg-cyan-300 cursor-pointer hover:bg-cyan-400 transition text-black px-3 rounded-md">
        Search
      </button>
    </Form>
  );
}
