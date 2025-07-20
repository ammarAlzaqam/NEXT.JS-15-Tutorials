import { cookies } from "next/headers";

export default async function AboutPage() {
  console.log("About server component");
  const cookieStore = await cookies();
  console.log(cookieStore.get("theme"));
  return <h1>About page {new Date().toLocaleTimeString()}</h1>;
}
