import "client-only";

export default function clientSideFunction() {
  console.log(
    `use window object,
      use localStorage`
  );
  return "client result";
}
