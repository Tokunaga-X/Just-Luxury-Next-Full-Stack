"use client"

import Image from "next/image"
import { Send } from "lucide-react"
import house from "@/public/images/house.jpg"
import { useState } from "react"

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData(prevState => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send the form data to your server
        console.log("Form submitted:", formData)
        // Reset form after submission
        setFormData({ name: "", email: "", message: "" })
    }

    return (
        <>
            <Image
                src={house}
                alt="house"
                className="w-[100vw] h-[20vh] object-cover"
            />
            <div className="container mx-auto px-6 py-8">
                <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-xl font-semibold mb-4">
                            Send us a message
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                <Send className="h-5 w-5 mr-2" />
                                Send Message
                            </button>
                        </form>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Our Team</h2>
                        <p className="mb-4">
                            Feel free to reach out to us for any inquiries about
                            our luxury products.
                        </p>
                        <div className="space-y-2">
                            <p>
                                <strong>Address:</strong> 123 Luxury Lane,
                                Opulence City, 90210
                            </p>
                            <p>
                                <strong>Phone:</strong> +1 (555) 123-4567
                            </p>
                            <p>
                                <strong>Email:</strong> info@just-luxury.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
