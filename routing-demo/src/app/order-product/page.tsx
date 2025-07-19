"use client";

import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  return (
    <section>
      <h1>Order product</h1>
      <button onClick={() => router.push("/")}>Place order</button>
    </section>
  );
}
