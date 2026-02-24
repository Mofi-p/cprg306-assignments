import Link from "next/link";

export default function Home() {
  return (
      <main className="min-h-screen px-4 py-8 max-w-3xl mx-auto">
    <h1 className="text-center">CPRG 306: Web Development 2 - Assignments</h1>
    <nav className="sm:grid-cols-2 lg:grid-cols-4 mt-8 gap-4 grid justify-around-center">
    <Link href="/week-2">
      <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-indigo-700 transition shadow" type="button">Week-2 Page</button>
    </Link>

    <Link href="/week-3">
      <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-indigo-700 transition shadow" type="button">Week-3 Page</button>
    </Link>

    <Link href="/week-4">
      <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-indigo-700 transition shadow" type="button">Week-4 Page</button>
    </Link>

    <Link href="/week-5">
      <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-indigo-700 transition shadow" type="button">Week-5 Page</button>
    </Link>

    <Link href="/week-6">
      <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-indigo-700 transition shadow" type="button">Week-6 Page</button>
    </Link>

    </nav>
    </main>
    
  );
}
