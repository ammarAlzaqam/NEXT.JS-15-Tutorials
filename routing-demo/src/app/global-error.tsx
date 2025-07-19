"use client";

import "./globals.css";

export default function GlobalError() {
  return (
    <html lang="en">
      <body>
        <main className="flex flex-col justify-center items-center min-h-screen">
          <h1 className="text-2xl font-bold mb-4">Something went wrong!</h1>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-500 hover:bg-blue-700 transition text-white font-bold py-2 px-4 rounded-md"
          >
            Refresh
          </button>
        </main>
      </body>
    </html>
  );
}
