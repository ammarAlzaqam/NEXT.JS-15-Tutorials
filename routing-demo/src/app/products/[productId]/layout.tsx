import { ReactNode } from "react";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ProductLayout({ children }: { children: ReactNode }) {
  const random = getRandomInt(2);
  if (random === 1) throw new Error("Error Loading product");
  return (
    <section>
      {children}
      <h1>Featured products</h1>
    </section>
  );
}
