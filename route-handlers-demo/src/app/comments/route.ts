import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET() {
  return Response.json({ comments });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const newComment = { id: comments.length + 1, ...body };
  comments.push(newComment);

  //return Response.json(
  //  { message: "Comment created successfully" },
  //  { status: 201 }
  //);
  return new Response(
    JSON.stringify({
      message: "Comment created successfully",
      ...newComment,
    }),
    {
      headers: { "Content-Type": "application/json" },
      status: 201,
    }
  );
}
