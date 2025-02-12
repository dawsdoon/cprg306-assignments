import React from "react";
import ItemList from "./item-list";

const Page = () => {
  return (
    <div className="bg-blue-900 min-h-screen flex justify-center items-center">
      <main className="max-w-2xl p-6 bg-blue-500 shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">Shopping List</h1>
        <div className="text-left">
          <ItemList />
        </div>
      </main>
    </div>
  );
};

export default Page;