"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");
  const [nameTouched, setNameTouched] = useState(false);

  const increment = () => { if (quantity < 99) setQuantity(quantity + 1); };
  const decrement = () => { if (quantity > 1) setQuantity(quantity - 1); };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || name.length < 2) return;
    onAddItem({ name, quantity, category });
    setName("");
    setQuantity(1);
    setCategory("produce");
    setNameTouched(false);
  };

  const isNameInvalid = nameTouched && name.length < 2;

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
      <p className="text-xs uppercase tracking-widest text-amber-400 font-medium mb-5">
        ✦ Add to list
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">

        {/* Name */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs uppercase tracking-widest text-zinc-500 font-medium">
            Item Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setNameTouched(true)}
            placeholder="e.g. avocados"
            className={`bg-zinc-800 border rounded-lg px-4 py-2.5 text-zinc-100 text-sm outline-none transition-colors placeholder:text-zinc-600
              ${isNameInvalid
                ? "border-red-500 focus:border-red-400"
                : "border-zinc-700 focus:border-amber-400"
              }`}
          />
          {isNameInvalid && (
            <p className="text-red-400 text-xs">Min 2 characters required.</p>
          )}
        </div>

        {/* Quantity */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs uppercase tracking-widest text-zinc-500 font-medium">
            Quantity
          </label>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={decrement}
              className="w-9 h-9 rounded-full border border-amber-400 border-opacity-40 text-amber-400 text-lg flex items-center justify-center hover:bg-amber-400 hover:bg-opacity-10 transition-colors"
            >
              −
            </button>
            <span className="text-2xl font-bold text-zinc-100 w-6 text-center">
              {quantity}
            </span>
            <button
              type="button"
              onClick={increment}
              className="w-9 h-9 rounded-full border border-amber-400 border-opacity-40 text-amber-400 text-lg flex items-center justify-center hover:bg-amber-400 hover:bg-opacity-10 transition-colors"
            >
              +
            </button>
          </div>
          <p className="text-xs text-zinc-600">Min 1 · Max 99</p>
        </div>

        {/* Category */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs uppercase tracking-widest text-zinc-500 font-medium">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2.5 text-zinc-100 text-sm outline-none focus:border-amber-400 transition-colors"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen Foods</option>
            <option value="canned">Canned Goods</option>
            <option value="dry">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={!name || name.length < 2}
          className="w-full py-3 rounded-lg text-xs uppercase tracking-widest font-medium transition-colors
            bg-amber-400 text-zinc-950 hover:bg-amber-300
            disabled:bg-zinc-800 disabled:text-zinc-600 disabled:cursor-not-allowed"
        >
          Add Item
        </button>

      </form>
    </div>
  );
}