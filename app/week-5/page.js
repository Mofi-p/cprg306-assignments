import ItemList from "./item-list";


export default function Page() {
  return (
    <main className="min-h-screen px-4 py-8 max-w-3xl mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      <ItemList />
    </main>
  );
}