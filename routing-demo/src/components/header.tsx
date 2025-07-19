import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between items-center px-10 py-5 bg-amber-500 text-white text-xl">
      <ul className="flex justify-center items-center gap-5">
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>

      <div>
        <button className="bg-gray-500 rounded-md hover:bg-gray-600 transition px-4 py-0.5">
          <Link href="/login">login</Link>
        </button>
      </div>
    </div>
  );
}
