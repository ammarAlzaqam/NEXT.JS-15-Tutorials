"use client";

import ImageSlider from "@/components/imageSlider";

// import { serverSideFunction } from "@/utils/server-utils";

export default function ClientRoutePage() {
  //   const result = serverSideFunction();
  const settings = {
    dots: true,
  };
  return <ImageSlider />;
}
