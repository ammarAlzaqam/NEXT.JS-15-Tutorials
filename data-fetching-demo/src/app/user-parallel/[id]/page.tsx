type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Album = {
  userId: number;
  id: number;
  title: string;
};

async function getUserPosts(userId: string) {
  await new Promise((res) => setTimeout(res, 1000));
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  return res.json();
}

async function getUserAlbums(userId: string) {
  await new Promise((res) => setTimeout(res, 1000));
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
  );
  return res.json();
}

export default async function UserProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [posts, albums] = await Promise.all([
    getUserPosts(id),
    getUserAlbums(id),
  ]);

  return (
    <section className="p-5">
      <h1 className="text-5xl text-white font-bold mb-16">User Profile</h1>

      <div className="flex gap-10 justify-center">
        <ShowUserPosts posts={posts} />
        <ShowUserAlbums albums={albums} />
      </div>
    </section>
  );
}

const ShowUserPosts = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="w-[48%]">
      <h2 className="font-semibold text-4xl text-white mb-4">Posts</h2>
      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-10 space-y-3 bg-white rounded-md text-black"
          >
            <h1 className="font-bold text-2xl">{post.title}</h1>
            <p className="text-gray-800">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const ShowUserAlbums = ({ albums }: { albums: Album[] }) => {
  return (
    <div className="w-[48%]">
      <h2 className="font-semibold text-4xl text-white mb-4">Albums</h2>
      <div className="space-y-4">
        {albums.map((album) => (
          <div key={album.id} className="p-10 bg-white rounded-md">
            <p className="text-gray-800">{album.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
