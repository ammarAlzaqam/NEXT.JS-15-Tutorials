import Link from "next/link";

export default function Header() {
  return (
    <div className="p-5 bg-amber-500 text-white text-xl">
      <ul className="flex justify-center items-center gap-5">
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </div>
  )
}