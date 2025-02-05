import React from "react";
import ItemList from "./ItemList";

const Page = () => {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Shopping Listt</h1>
      <ItemList />
    </main>
  );
};

export default Page;
