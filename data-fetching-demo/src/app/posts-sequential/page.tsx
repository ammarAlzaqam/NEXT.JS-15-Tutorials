import { Suspense } from "react";
import Author from "./author";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function PostsSequential() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await response.json();
  const filteredPosts = posts.filter((p) => p.id % 10 === 1);

  return (
    <section className="p-5">
      <h1 className="text-white text-4xl font-bold mb-16">Blog Posts</h1>
      <ShowPosts posts={filteredPosts} />
    </section>
  );
}

const ShowPosts = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {posts.map((post) => (
        <div
          key={post.id}
          className="p-10 space-y-3 w-[48%] bg-white rounded-md text-black"
        >
          <h1 className="font-bold text-2xl">{post.title}</h1>
          <p className="text-gray-800">{post.body}</p>
          <Suspense
            fallback={
              <div className="text-sm text-gray-500">Loading author...</div>
            }
          >
            <Author userId={post.userId} />
          </Suspense>
        </div>
      ))}
    </div>
  );
};
