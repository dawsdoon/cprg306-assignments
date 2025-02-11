import React from "react";

const Item = ({ name, quantity, category }) => {
  return (
    <li className="p-4 border-b border-gray-300 flex justify-between items-center">
      <div>
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-sm text-gray-500">Category: {category}</p>
      </div>
      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
        {quantity}
      </span>
    </li>
  );
};

export default Item;
