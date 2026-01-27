import ItemList from "./item-list";


export default function Page() {
  return (
    <main className="min-h-screen px-4 py-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold">Shopping List</h1>
      <ItemList />
    </main>
  );
}