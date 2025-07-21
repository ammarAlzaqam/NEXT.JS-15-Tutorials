"use client";

// import ImageSlider from "@/components/imageSlider";
import { useTheme } from "@/components/theme-provider";

// import { serverSideFunction } from "@/utils/server-utils";

export default function ClientRoutePage() {
  //   const result = serverSideFunction();
  const theme = useTheme();
  return <h1 style={{ color: theme.colors.secondary }}>Client route page</h1>;
}
