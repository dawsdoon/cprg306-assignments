"use client";

import { useState } from "react";

export default function NewItem() {
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
        console.log("Added:", { name, quantity, category });
        alert(`Added Item:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <main className="flex justify-center items-start w-full min-h-screen bg-black pt-10">
            <form onSubmit={handleSubmit} className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full h-[170px]">
                <div className="mb-2">
                    <input 
                        type="text" 
                        placeholder="Item name" 
                        required 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
                    />
                </div>

                <div className="flex justify-between">
                    <div className="p-2 mt-1 mb-1 rounded-md bg-white text-white w-36">
                        <div className="flex justify-between">
                            <span className="text-black">{quantity}</span>
                            <div className="flex">
                                <button 
                                    type="button" 
                                    onClick={decrement} 
                                    disabled={quantity === 1} 
                                    className="w-8 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 disabled:bg-gray-400 disabled:text-gray-700"
                                >
                                    −
                                </button>
                                <button 
                                    type="button" 
                                    onClick={increment} 
                                    disabled={quantity === 20} 
                                    className="w-8 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ml-1 disabled:bg-gray-400 disabled:text-gray-700"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>

                    <select 
                        value={category} 
                        onChange={(e) => setCategory(e.target.value)} 
                        className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
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
                    className="w-full p-2 mt-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                >
                    +
                </button>
            </form>
        </main>
    );
}
