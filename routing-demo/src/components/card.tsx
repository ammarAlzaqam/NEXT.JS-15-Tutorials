import { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center items-center p-[100px] rounded-sm border border-gray-300 shadow-md shadow-amber-50">
      {children}
    </div>
  );
}
