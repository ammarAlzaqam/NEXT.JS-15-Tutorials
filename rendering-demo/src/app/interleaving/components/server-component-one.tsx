import fs from "fs";
import ClientComponentOne from "./client-component-one";

export default function ServerComponentOne() {
  fs.readFileSync(
    "src/app/interleaving/components/server-component-one.tsx",
    "utf-8"
  );
  return (
    <>
      <h1>Server component one</h1>
      <ClientComponentOne />
    </>
  );
}
