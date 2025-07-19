import { notFound, redirect } from "next/navigation";

interface ProductReviewProps {
  params: Promise<{ productId: string; reviewId: string }>;
}

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default async function ProductReview({ params }: ProductReviewProps) {
  const random = getRandomInt(2);
  if (random === 1) throw new Error("Error Loading review");
  const { reviewId, productId } = await params;
  if (parseInt(reviewId) > 1000) redirect("/");
  // if (parseInt(reviewId) > 1000) notFound();
  return (
    <h1>
      Review {reviewId} for product {productId}
    </h1>
  );
}
