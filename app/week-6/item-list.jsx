"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  let sortedItems = [];
  let groupedItems = {};
  let sortedCategories = [];

  if (sortBy === "name") {
    sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "category") {
    sortedItems = [...items].sort((a, b) =>
      a.category.localeCompare(b.category)
    );
  } else if (sortBy === "grouped") {
    groupedItems = [...items].reduce((acc, item) => {
      const category = item.category;
      if (!acc[category]) acc[category] = [];
      acc[category].push(item);
      return acc;
    }, {});

    sortedCategories = Object.keys(groupedItems).sort();
    sortedCategories.forEach((category) => {
      groupedItems[category].sort((a, b) => a.name.localeCompare(b.name));
    });
  }

  return (
    <div>
      {/* Sort Buttons */}
      <div className="mb-4 flex flex-col sm:flex-row gap-2 sm:gap-0">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 sm:mr-2 rounded transition-colors ${
            sortBy === "name"
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 sm:mr-2 rounded transition-colors ${
            sortBy === "category"
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy("grouped")}
          className={`px-4 py-2 rounded transition-colors ${
            sortBy === "grouped"
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Group by Category
        </button>
      </div>

      {/* Regular Sort */}
      {sortBy !== "grouped" && (
        <ul className="space-y-2 sm:space-y-4 w-full max-w-2xl">
          {sortedItems.map((item, index) => (
            <Item
              key={item.id ?? index}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      )}

      {/* Grouped by Category */}
      {sortBy === "grouped" && (
        <div className="w-full max-w-2xl">
          {sortedCategories.map((category) => (
            <div key={category} className="mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl font-bold capitalize mb-2">
                {category}
              </h2>
              <ul className="space-y-2">
                {groupedItems[category].map((item, index) => (
                  <Item
                    key={item.id ?? index}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
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