"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

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

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 px-6 py-12">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-black tracking-tight">
            <span className="text-amber-400">My Shopping List</span> 
          </h1>
          <div className="mt-3 w-full h-0.5 bg-amber-400" />
          <p className="mt-3 text-xs uppercase tracking-widest text-zinc-600">
            Add items — who doesn't love food?
          </p>
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