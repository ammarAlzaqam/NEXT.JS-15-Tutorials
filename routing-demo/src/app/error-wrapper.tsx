"use client";

import { ReactNode, useState } from "react";

const ErrorSimulator = ({
  message = "An Error occurred",
}: {
  message?: string;
}) => {
  const [error, setError] = useState(false);

  if (error) throw new Error(message);

  return (
    <button
      title="Simulate an error"
      className="bg-red-950 hover:bg-white text-red-500 hover:text-red-950 transition cursor-pointer rounded p-1 leading-none font-semibold text-sm"
      onClick={() => setError(true)}
    >
      Simulate Error
    </button>
  );
};

export const ErrorWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col relative mt-8 p-4 rounded-lg border border-gray-300">
      <div className="absolute top-0 left-4 -translate-y-1/2">
        <ErrorSimulator message="Simulated error in root layout" />
      </div>
      {children}
    </div>
  );
};
