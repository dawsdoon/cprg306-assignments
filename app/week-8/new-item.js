"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      quantity,
      category,
    };
    onAddItem(newItem);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-700 p-4 rounded-lg shadow-md mb-6">
      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Item name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400"
        />

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={decrement}
              className="px-3 py-1 bg-gray-500 text-white rounded-lg disabled:bg-gray-400"
              disabled={quantity === 1}
            >
              −
            </button>
            <span className="text-lg text-white">{quantity}</span>
            <button
              type="button"
              onClick={increment}
              className="px-3 py-1 bg-gray-500 text-white rounded-lg disabled:bg-gray-400"
              disabled={quantity === 20}
            >
              +
            </button>
          </div>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 border border-gray-600 rounded-lg bg-gray-800 text-white"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen-foods">Frozen Foods</option>
            <option value="canned-goods">Canned Goods</option>
            <option value="dry-goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
        >
          Add Item
        </button>
      </div>
    </form>
  );
}
