import { notFound, redirect } from "next/navigation";

interface ProductReviewProps {
  params: Promise<{ productId: string; reviewId: string }>;
}

export default async function ProductReview({ params }: ProductReviewProps) {
  const { reviewId, productId } = await params;
  if (parseInt(reviewId) > 1000) redirect("/");
  // if (parseInt(reviewId) > 1000) notFound();
  return (
    <h1>
      Review {reviewId} for product {productId}
    </h1>
  );
}
