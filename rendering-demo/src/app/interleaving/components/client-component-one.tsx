"use client";

import { ReactNode, useState } from "react";
import ServerComponentOne from "./server-component-one";

export default function ClientComponentOne({
  children,
}: {
  children?: ReactNode;
}) {
  const [state, setState] = useState();
  return (
    <>
      <h1>Client component one</h1>
      {children}
    </>
  );
}
