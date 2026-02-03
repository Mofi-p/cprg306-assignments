"use client";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");
    // validation
  const [nameTouched, setNameTouched] = useState(false);

  const increment = () => {
    if (quantity < 99) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || name.length < 2) {
      alert("Item name must be at least 2 characters.");
      return;
    }

    const item = { name, quantity, category };
    console.log(item);

    alert(
      `Item: ${name}\nQuantity: ${quantity}\nCategory: ${category}`
    );

    setName("");
    setQuantity(1);
    setCategory("produce");
    setNameTouched(false);
  };

  const isNameInvalid = nameTouched && name.length < 2;

  return (
    <div className="bg-slate-100 p-8 rounded-xl shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-slate-900">
        Add New Item
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Name for Item */}
        <div>
          <label className="block mb-1 font-medium">
            Item Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setNameTouched(true)}
            className={`w-full p-2 rounded border ${
              isNameInvalid ? "border-red-500" : "border-slate-300"
            }`}
            required
          /> 
          {isNameInvalid && (
            <p className="text-red-500 text-sm mt-1">
              Name is required (min 2 characters).
            </p>
          )}
        </div>

        {/* Quantity */}
        <div>
          <label className="block mb-1 font-medium">
            Quantity
          </label>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={decrement}
              className="px-3 py-1 bg-slate-300 rounded text-lg"
            >
              −
            </button>

            <span className="text-xl font-semibold">
              {quantity}
            </span>

            <button
              type="button"
              onClick={increment}
              className="px-3 py-1 bg-slate-300 rounded text-lg"
            >
              +
            </button>
          </div>
          <p className="text-sm text-slate-500">
            Min 1, Max 99
          </p>
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1 font-medium">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 rounded border border-slate-300"
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
          disabled={!name}
          className="w-full bg-indigo-600 text-white py-2 rounded-lg
                     hover:bg-indigo-700
                     disabled:bg-gray-400
                     disabled:cursor-not-allowed"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}
