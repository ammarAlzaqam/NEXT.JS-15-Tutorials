import connectDB from "@/libs/dbConnect";
import Product from "@/models/product";

type Product = {
  id: number;
  title: string;
  price: number;
  description?: string | null;
};

export async function POST(req: Request) {
  const body = (await req.json()) as Product;
  if (!body.title || !body.price)
    return Response.json(
      { message: "All fields is required" },
      { status: 400 }
    );

  try {
    await connectDB();
    const product = await Product.create(body);
    return new Response(
      JSON.stringify({ data: product, message: "Product added successfully" }),
      {
        headers: { "Content-Type": "application/json" },
        status: 201,
      }
    );
  } catch (e) {
    console.error(`An error occurred: ${e}`);
    return new Response("Something went wrong", { status: 500 });
  }
}
