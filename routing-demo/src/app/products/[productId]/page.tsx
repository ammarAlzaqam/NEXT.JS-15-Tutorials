import { Metadata } from "next";

interface ProductProps {
  params: Promise<{ productId: string }>;
}

export const generateMetadata = async ({
  params,
}: ProductProps): Promise<Metadata> => {
  const { productId } = await params;
  const title = await new Promise((resolve) =>
    setTimeout(() => resolve(`iPhone ${productId}`), 1000)
  ); // search product in DB with id
  return {
    title: `Product ${title}`,
  };
};

export default async function ({ params }: ProductProps) {
  const { productId } = await params;
  return <h1>Product {productId} details</h1>;
}
