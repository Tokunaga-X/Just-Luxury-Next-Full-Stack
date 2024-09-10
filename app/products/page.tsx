"use client"

import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import house from "@/public/images/house.jpg"
import { useState } from "react"

const products = [
    { id: 1, name: "Luxury Yacht", price: 5000000, category: "Boats" },
    { id: 2, name: "Mansion", price: 10000000, category: "Houses" },
    { id: 3, name: "Sports Car", price: 500000, category: "Cars" },
    // Add more products as needed
]

const categories = ["All", "Boats", "Houses", "Cars"]

export default function Products() {
    const [selectedCategory, setSelectedCategory] = useState("All")

    const filteredProducts =
        selectedCategory === "All"
            ? products
            : products.filter(product => product.category === selectedCategory)

    return (
        <>
            <Image
                src={house}
                alt="house"
                className="w-[100vw] h-[20vh] object-cover"
            />
            <div className="container mx-auto px-6 py-8">
                <h1 className="text-3xl font-bold mb-6">Our Luxury Products</h1>
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/4 mb-6 md:mb-0">
                        <h2 className="text-xl font-semibold mb-4">
                            Categories
                        </h2>
                        <ul>
                            {categories.map(category => (
                                <li key={category} className="mb-2">
                                    <button
                                        onClick={() =>
                                            setSelectedCategory(category)
                                        }
                                        className={`${
                                            selectedCategory === category
                                                ? "font-bold"
                                                : ""
                                        } text-gray-600 hover:text-gray-800`}
                                    >
                                        {category}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProducts.map(product => (
                            <div
                                key={product.id}
                                className="border rounded-lg overflow-hidden shadow-lg"
                            >
                                <img
                                    src="/placeholder.svg?height=300&width=400"
                                    alt={product.name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2">
                                        {product.name}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        ${product.price.toLocaleString()}
                                    </p>
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-150 ease-in-out flex items-center">
                                        <ShoppingCart className="h-5 w-5 mr-2" />
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
