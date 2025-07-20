import Image from "next/image";
import wondersImages from "./wonders";
import Link from "next/link";

export default function PhotoFeed() {
  return (
    <section className="mt-3 container mx-auto">
      <h1 className="text-center text-3xl font-bold">
        New Wonders of the World
      </h1>
      <div className="mt-3 grid grid-cols-1 md:grid-cols-4 gap-4">
        {wondersImages.map(({ id, src, name }) => (
          <Link key={id} href={`/photo-feed/${id}`}>
            <Image
              alt={name}
              src={src}
              className="w-full object-cover aspect-square"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
