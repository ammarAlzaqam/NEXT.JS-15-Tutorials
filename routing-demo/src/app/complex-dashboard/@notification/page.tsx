import Card from "@/components/card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      <div>Notifications</div>
      <div className="ms-3 text-blue-400">
        <Link href="/complex-dashboard/archived">Archived {">>"}</Link>
      </div>
    </Card>
  );
}
