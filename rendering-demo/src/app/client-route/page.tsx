"use client";

// import ImageSlider from "@/components/imageSlider";
import { useTheme } from "@/components/theme-provider";
import clientSideFunction from "@/utils/client-utils";

// import { serverSideFunction } from "@/utils/server-utils";

export default function ClientRoutePage() {
  //   const result = serverSideFunction();
  const result = clientSideFunction();
  const theme = useTheme();
  return (
    <>
      <h1 style={{ color: theme.colors.secondary }}>Client route page</h1>
      <p>{result}</p>
    </>
  );
}
