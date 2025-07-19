"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <p className="text-red-500">{error.message}</p>
      <button onClick={reload}>Try again</button>
    </div>
  );
}
