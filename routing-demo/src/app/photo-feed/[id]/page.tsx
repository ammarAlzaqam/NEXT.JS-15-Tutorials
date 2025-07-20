import Image from "next/image";
import wondersImages, { WonderImage } from "../wonders";
import { notFound } from "next/navigation";

interface PhotoPageProps {
  params: Promise<{ id: string }>;
}

export default async function PhotoPage({ params }: PhotoPageProps) {
  const { id } = await params;
  const photo: WonderImage = wondersImages.find((wImg) => wImg.id === id)!;
  if (!photo) notFound();
  return (
    <section className="container mx-auto my-10">
      <div className="w-1/2 mx-auto">
        <h1 className="text-center text-3xl font-bold my-4">{photo.name}</h1>
        <Image
          alt={photo.name}
          src={photo.src}
          className="w-full object-cover aspect-square"
        />
        <div className="bg-gray-800 p-4">
          <h3>{photo.photographer}</h3>
          <h3>{photo.location}</h3>
        </div>
      </div>
    </section>
  );
}
