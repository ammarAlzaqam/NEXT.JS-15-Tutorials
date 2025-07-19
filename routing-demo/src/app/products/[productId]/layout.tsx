import { ReactNode } from "react";

export default function ProductLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      {children}
      <h1>Featured products</h1>
    </section>
  );
}
