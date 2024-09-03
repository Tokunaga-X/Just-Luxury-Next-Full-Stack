"use client"

import React, { useState } from "react"

// import Intro from "../components/Intro"
// import { Link } from "react-router-dom"
// import Swiper from "../components/upSwiper"
import Image from "next/image"
import house from "../public/images/house.jpg"

interface Option {
    value: string
    label: string
}

const Home: React.FC = () => {
    const [category, setCategory] = useState<string>("")
    const [priceRange, setPriceRange] = useState<string>("")

    const options1: Option[] = [
        { value: "All", label: "All" },
        { value: "House", label: "House" },
        { value: "Car", label: "Car" },
        { value: "Boat", label: "Boat" },
    ]

    const options2: Option[] = [
        { value: "Whatever", label: "Whatever" },
        { value: "0-10000($)", label: "0-10000($)" },
        { value: "1w-100w($)", label: "1w-100w($)" },
        { value: "100w-1000w($)", label: "100w-1000w($)" },
    ]

    return (
        <div className="overflow-hidden">
            {/* <Swiper /> */}
            <Image
                src={house}
                alt="house"
                className="w-full h-[90vh] object-cover"
            />
            <div className="w-[70vw] h-[30vh] bg-[#222222] absolute top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col justify-center items-center">
                <div className="flex flex-col md:flex-row">
                    <select
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                        className="m-6 p-2 bg-white rounded md:m-3"
                    >
                        <option value="">奢侈品类别</option>
                        {options1.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <select
                        value={priceRange}
                        onChange={e => setPriceRange(e.target.value)}
                        className="m-6 p-2 bg-white rounded md:m-3"
                    >
                        <option value="">心里价位</option>
                        {options2.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mt-2">
                    {/* <Link to="/shop"> */}
                    <button className="bg-transparent text-white border border-white px-4 py-2 rounded hover:bg-green-500 hover:border-transparent transition duration-250 ease-in-out">
                        帮我查找
                    </button>
                    {/* </Link> */}
                </div>
            </div>
            {/* <Intro /> */}
        </div>
    )
}

export default Home
