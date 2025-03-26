"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

const Page = () => {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center p-6">
      <main className="w-full max-w-3xl bg-gray-800 text-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Shopping List</h1>

        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </main>
    </div>
  );
};

export default Page;
