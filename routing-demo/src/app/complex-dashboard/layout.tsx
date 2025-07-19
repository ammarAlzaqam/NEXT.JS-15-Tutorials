import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  notification: ReactNode;
  revenue: ReactNode;
  users: ReactNode;
}

export default function ComplexDashboardLayout(props: Props) {
  return (
    <div>
      <div>{props.children}</div>
      <div className="flex gap-5">
        <div className="flex flex-col gap-5">
          <div>{props.users}</div>
          <div>{props.revenue}</div>
        </div>
        <div className="flex">{props.notification}</div>
      </div>
    </div>
  );
}
