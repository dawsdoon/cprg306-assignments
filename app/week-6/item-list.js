"use client";

import React, { useState } from "react";
import itemsData from "./items.json";
import Item from "./item";

const ItemList = () => {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const groupedItems = itemsData.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  const sortedCategories = Object.keys(groupedItems).sort();

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-xl font-bold text-black mb-4">Shopping List</h2>

      <div className="mb-4 flex gap-2">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 ${
            sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 ${
            sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy("group")}
          className={`px-4 py-2 ${
            sortBy === "group" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Group by Category
        </button>
      </div>

      <ul className="divide-y divide-gray-200">
        {sortBy === "group"
          ? sortedCategories.map((category) => (
              <li key={category} className="mt-4">
                <h3 className="text-lg font-bold text-black capitalize">
                  {category}
                </h3>
                <ul className="ml-4">
                  {groupedItems[category]
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((item) => (
                      <Item key={item.id} {...item} />
                    ))}
                </ul>
              </li>
            ))
          : sortedItems.map((item) => <Item key={item.id} {...item} />)}
      </ul>
    </div>
  );
};

export default ItemList;
