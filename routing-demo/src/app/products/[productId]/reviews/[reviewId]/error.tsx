"use client";

export default function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div className="flex justify-center items-center text-red-500">
      {error.message}
    </div>
  );
}
