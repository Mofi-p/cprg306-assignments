"use client";

import { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  // Sort items by name
  if (sortBy === "name") {
    var sortedItems = [...itemsData].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  }
  
  // Sort items by category
  else if (sortBy === "category") {
    var sortedItems = [...itemsData].sort((a, b) => {
      return a.category.localeCompare(b.category);
    });
  }
  
  // Group items by category
  else if (sortBy === "grouped") {
    var groupedItems = itemsData.reduce((acc, item) => {
      const category = item.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(item);
      return acc;
    }, {});

    // Sort categories alphabetically
    var sortedCategories = Object.keys(groupedItems).sort();
    
    // Sort items alphabetically
    sortedCategories.forEach(category => {
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
          {sortedItems.map((item) => (
            <Item 
              key={item.id}
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
                {groupedItems[category].map((item) => (
                  <Item 
                    key={item.id}
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