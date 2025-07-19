import { Metadata } from "next";
import Counter from "./counter";

export const metadata: Metadata = {
  title: "counter",
};

export default function CounterPage() {
  return <Counter />;
}
