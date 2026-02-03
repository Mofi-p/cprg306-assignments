import Link from "next/link";

export default function Home() {
  return (
      <main>
    <h1 className="text-center">CPRG 306: Web Development 2 - Assignments</h1>
    <nav className="flex gap-3 justify-center mt-4">
    <Link href="/week-2">
      <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-indigo-700 transition shadow" type="button">Week-2 Page</button>
    </Link>

    <Link href="/week-3">
      <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-indigo-700 transition shadow" type="button">Week-3 Page</button>
    </Link>

    <Link href="/week-4">
      <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-indigo-700 transition shadow" type="button">Week-4 Page</button>
    </Link>
    </nav>
    </main>
  );
}
