import fs from "fs";

export default function ServerComponentTow() {
  fs.readFileSync(
    "src/app/interleaving/components/server-component-one.tsx",
    "utf-8"
  );
  return <h1>Server component tow</h1>;
}
