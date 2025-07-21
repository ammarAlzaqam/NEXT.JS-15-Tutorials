"use client";

import { useState } from "react";

export const NavSearch = () => {
  console.log("NavSearch rendered");
  const [search, setSearch] = useState("");
  return <h1>Nav search input</h1>;
};
