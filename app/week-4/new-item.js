"use client";

import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="flex justify-center items-start h-screen pt-10">
            <div className="flex items-center border border-gray-300 rounded-md bg-white w-36 p-1 shadow">
                <span className="text-lg font-medium text-black ml-2">{quantity}</span>

                <div className="ml-auto flex space-x-1">
                    <button
                        onClick={decrement}
                        disabled={quantity === 1}
                        className="px-2 py-1 text-lg bg-blue-500 text-white rounded-md disabled:bg-gray-300"
                    >
                        −
                    </button>

                    <button
                        onClick={increment}
                        disabled={quantity === 20}
                        className="px-2 py-1 text-lg bg-blue-500 text-white rounded-md disabled:bg-gray-300"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}

