export default function RootNotFoundPage() {
  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className="text-center space-y-5 shadow-md shadow-gray-700 p-6 rounded-3xl">
        <h2 className="font-semibold text-2xl text-red-500">Page Not Found</h2>
        <p className="text-gray-400">Could not find requested resource</p>
      </div>
    </section>
  );
}
