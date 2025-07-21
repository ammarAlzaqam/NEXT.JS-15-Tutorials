type Author = {
  id: number;
  name: string;
};

export default async function Author({ userId }: { userId: number }) {
  await new Promise((res) => setTimeout(res, 1000));
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const user: Author = await response.json();

  return (
    <div className="text-gray-500">
      Written by:{" "}
      <span className="font-semibold  text-gray-800">{user.name}</span>
    </div>
  );
}
