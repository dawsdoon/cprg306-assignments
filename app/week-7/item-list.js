"use client";

import React, { useState } from "react";
import Item from "./item";

const ItemList = ({ items }) => {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  const sortedCategories = Object.keys(groupedItems).sort();

  return (
    <div className="bg-gray-700 p-4 rounded-lg shadow-md">
      <div className="flex justify-between mb-4">
        <button
          onClick={() => setSortBy("name")}
          className={`px-3 py-1 rounded-lg ${
            sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-600 text-white"
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-3 py-1 rounded-lg ${
            sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-600 text-white"
          }`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy("group")}
          className={`px-3 py-1 rounded-lg ${
            sortBy === "group" ? "bg-blue-500 text-white" : "bg-gray-600 text-white"
          }`}
        >
          Group by Category
        </button>
      </div>

      <ul className="divide-y divide-gray-600">
        {sortBy === "group"
          ? sortedCategories.map((category) => (
              <li key={category} className="mt-4">
                <h3 className="text-lg font-bold text-black capitalize bg-gray-300 p-2 rounded">
                  {category}
                </h3>
                <ul className="ml-4">
                  {groupedItems[category]
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((item) => (
                      <div key={item.id} className="text-black bg-gray-200 p-2 rounded my-1">
                        <Item {...item} />
                      </div>
                    ))}
                </ul>
              </li>
            ))
          : sortedItems.map((item) => (
              <div key={item.id} className="text-black bg-gray-200 p-2 rounded my-1">
                <Item {...item} />
              </div>
            ))}
      </ul>
    </div>
  );
};

export default ItemList;
