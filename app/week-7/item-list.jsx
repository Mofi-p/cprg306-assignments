"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  let sortedItems = [];
  let groupedItems = {};
  let sortedCategories = [];

  if (sortBy === "name") {
    sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    sortedItems = [...items].sort((a, b) => a.category.localeCompare(b.category));
  } else if (sortBy === "grouped") {
    groupedItems = [...items].reduce((acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    }, {});
    sortedCategories = Object.keys(groupedItems).sort();
    sortedCategories.forEach((cat) => {
      groupedItems[cat].sort((a, b) => a.name.localeCompare(b.name));
    });
  }

  const sortOptions = [
    { value: "name", label: "By Name" },
    { value: "category", label: "By Category" },
    { value: "grouped", label: "Grouped" },
  ];

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
      <p className="text-xs uppercase tracking-widest text-amber-400 font-medium mb-5">
        ✦ Your list
      </p>

      {/* Sort buttons */}
      <div className="flex gap-2 flex-wrap mb-5">
        {sortOptions.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setSortBy(value)}
            className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium border transition-colors
              ${sortBy === value
                ? "bg-amber-400 border-amber-400 text-zinc-950"
                : "border-zinc-700 text-zinc-500 hover:border-amber-400 hover:text-amber-400"
              }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Regular sort */}
      {sortBy !== "grouped" && (
        <ul className="flex flex-col gap-2">
          {sortedItems.map((item, index) => (
            <Item
              key={item.id ?? index}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
              onSelect={() => onItemSelect(item)}
            />
          ))}
        </ul>
      )}

      {/* Grouped */}
      {sortBy === "grouped" && (
        <div className="flex flex-col gap-4">
          {sortedCategories.map((cat) => (
            <div key={cat}>
              <p className="text-xs uppercase tracking-widest text-zinc-600 border-b border-zinc-800 pb-1.5 mb-2">
                {cat}
              </p>
              <ul className="flex flex-col gap-2">
                {groupedItems[cat].map((item, index) => (
                  <Item
                    key={item.id ?? index}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                    onSelect={() => onItemSelect(item)}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}