import { ReactNode } from "react";

export default function PhotoFeedLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <section>
      {children}
      {modal}
    </section>
  );
}
