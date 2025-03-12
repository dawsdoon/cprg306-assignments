import React from "react";

const Item = ({ name, quantity, category }) => {
  return (
    <li className="p-4 border-b border-gray-200 flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600">Category: {category}</p>
      </div>
      <span className="px-3 py-1 text-sm font-medium text-white bg-blue-500 rounded-full">
        {quantity}
      </span>
    </li>
  );
};

export default Item;
