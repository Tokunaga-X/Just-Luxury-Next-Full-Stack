import Image from "next/image"
import { Trash2 } from "lucide-react"
import house from "@/public/images/house.jpg"

const cartItems = [
    { id: 1, name: "Luxury Yacht", price: 5000000, quantity: 1 },
    { id: 2, name: "Sports Car", price: 500000, quantity: 1 },
]

export default function Cart() {
    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    )

    return (
        <>
            <Image
                src={house}
                alt="house"
                className="w-[100vw] h-[20vh] object-cover"
            />
            <div className="container mx-auto px-6 py-8">
                <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <>
                        <div className="bg-white shadow-md rounded my-6">
                            <table className="text-left w-full border-collapse">
                                <thead>
                                    <tr>
                                        <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                            Product
                                        </th>
                                        <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                            Price
                                        </th>
                                        <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                            Quantity
                                        </th>
                                        <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                            Total
                                        </th>
                                        <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map(item => (
                                        <tr
                                            key={item.id}
                                            className="hover:bg-grey-lighter"
                                        >
                                            <td className="py-4 px-6 border-b border-grey-light">
                                                {item.name}
                                            </td>
                                            <td className="py-4 px-6 border-b border-grey-light">
                                                ${item.price.toLocaleString()}
                                            </td>
                                            <td className="py-4 px-6 border-b border-grey-light">
                                                {item.quantity}
                                            </td>
                                            <td className="py-4 px-6 border-b border-grey-light">
                                                $
                                                {(
                                                    item.price * item.quantity
                                                ).toLocaleString()}
                                            </td>
                                            <td className="py-4 px-6 border-b border-grey-light">
                                                <button className="text-red-500 hover:text-red-600">
                                                    <Trash2 className="h-5 w-5" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex justify-end">
                            <div className="w-1/3">
                                <div className="border-t pt-4 mt-4">
                                    <div className="flex justify-between">
                                        <span className="font-bold">
                                            Total:
                                        </span>
                                        <span className="font-bold">
                                            ${total.toLocaleString()}
                                        </span>
                                    </div>
                                </div>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 w-full hover:bg-blue-600 transition duration-150 ease-in-out">
                                    Proceed to Checkout
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}
