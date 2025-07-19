import Card from "@/components/card";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <Card>
      <div>Archived Notifications</div>
      <div className="ms-3 text-blue-400">
        <Link href="/complex-dashboard">Default {">>"}</Link>
      </div>
    </Card>
  );
}
