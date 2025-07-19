"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";

type NavLink = {
  name: string;
  href: string;
};

const navLinks: NavLink[] = [
  {
    name: "Register",
    href: "/register",
  },
  {
    name: "Login",
    href: "/login",
  },
  {
    name: "Forgot Password",
    href: "/forgot-password",
  },
];

export default function AuthLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const authPath = pathname.split("/").pop();
  const [input, setInput] = useState("");
  return (
    <section>
      <div className="p-2">
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className="bg-white text-black"
        />
      </div>
      <ul className="flex justify-center items-center gap-5">
        {navLinks.map(({ name, href }) => (
          <li key={name}>
            <Link
              href={href}
              className={`${
                authPath === href.slice(1) && "text-green-500 transition"
              }`}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
      {children}
    </section>
  );
}
