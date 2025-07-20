import { comments } from "../data";

interface Props {
  params: Promise<{ id: string }>;
}

export async function GET(_: Request, { params }: Props) {
  const { id } = await params;
  const comment = comments.find((c) => c.id === parseInt(id));
  if (!comment) return new Response("Comment not found", { status: 400 });

  return new Response(JSON.stringify(comment));
}

export async function PATCH(request: Request, { params }: Props) {
  const { id } = await params;
  const { text } = await request.json();
  let updatedCommentIndex = comments.findIndex((c) => c.id === parseInt(id));
  comments[updatedCommentIndex].text = text;
  return Response.json({ updatedComment: comments[updatedCommentIndex] });
}

export async function DELETE(_: Request, { params }: Props) {
  const { id } = await params;
  const commentIndex = comments.findIndex(
    (comment) => comment.id === parseInt(id)
  );
  const commentDeleted = comments[commentIndex];
  comments.splice(commentIndex, 1);
  return new Response(JSON.stringify({ commentDeleted }));
}
