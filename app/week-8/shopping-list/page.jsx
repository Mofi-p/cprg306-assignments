"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../_utils/auth-context";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const { user, firebaseSignOut } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Protect the page — if not logged in, show access denied
  if (!user) {
    return (
      <main className="min-h-screen bg-zinc-950 flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-zinc-100 mb-2">Access Denied</h2>
          <p className="text-zinc-500 text-sm mb-6">You must be signed in to view this page.</p>
          <button
            onClick={() => router.push("/week-8")}
            className="px-6 py-2.5 rounded-lg bg-amber-400 text-zinc-950 text-sm font-medium uppercase tracking-widest hover:bg-amber-300 transition-colors"
          >
            Go to Login
          </button>
        </div>
      </main>
    );
  }

  const handleAddItem = (newItem) => {
    const itemWithId = { ...newItem, id: crypto.randomUUID() };
    setItems([...items, itemWithId]);
  };

  const handleItemSelect = (item) => {
    let name = item.name.split(",")[0].trim();
    name = name.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
      ""
    ).trim();
    setSelectedItemName(name);
  };

  const handleSignOut = async () => {
    await firebaseSignOut();
    router.push("/week-8");
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 px-6 py-12">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex items-start justify-between mb-12">
          <div>
            <h1 className="text-5xl font-black tracking-tight">
              My <span className="text-amber-400">Shopping</span> List
            </h1>
            <div className="mt-3 w-12 h-0.5 bg-amber-400" />
            <p className="mt-3 text-xs uppercase tracking-widest text-zinc-600">
              Signed in as <span className="text-zinc-400">{user.displayName}</span>
            </p>
          </div>
          <button
            onClick={handleSignOut}
            className="mt-2 px-4 py-2 rounded-lg border border-zinc-700 text-zinc-500 text-xs uppercase tracking-widest hover:border-red-400 hover:text-red-400 transition-colors"
          >
            Sign Out
          </button>
        </div>

        {/* Two-column layout */}
        <div className="flex gap-8 items-start flex-col md:flex-row">
          <div className="flex-1 w-full flex flex-col gap-6">
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
          <div className="flex-1 w-full md:sticky md:top-8">
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>

      </div>
    </main>
  );
}