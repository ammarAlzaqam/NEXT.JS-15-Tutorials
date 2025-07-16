import Link from "next/link";

export default async function ReviewsList({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  return (
    <section>
      <h1>Product {productId} reviews</h1>
      <ul>
        <li>
          <Link href={`/products/${productId}/reviews/1`}>Reviews 1</Link>
        </li>
        <li>
          <Link href={`/products/${productId}/reviews/2`}>Reviews 2</Link>
        </li>
        <li>
          <Link href={`/products/${productId}/reviews/3`}>Reviews 3</Link>
        </li>
      </ul>
    </section>
  );
}
