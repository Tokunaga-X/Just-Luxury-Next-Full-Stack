// import { Link } from 'react-router-dom';
import Image from "next/image"
import Link from "next/link"
import React from "react"
import logo from "../../public/images/logo2.png"

const Nav = () => {
    return (
        <div>
            <nav className="fixed top-0 left-0 z-50 w-full h-[12vh] flex justify-between items-center bg-black bg-opacity-70 px-8">
                <Image
                    src={logo}
                    alt="logo"
                    title="logo"
                    className="h-[20vh] w-auto object-contain"
                    width={300}
                    height={300}
                />
                <ul className="flex justify-end space-x-[8vw]  list-none">
                    <li
                        className="text-base z-10 relative animate-fadeInDown"
                        style={{ animationDelay: "0.5s" }}
                    >
                        <Link
                            href="/"
                            className="no-underline text-white tracking-wider p-2 transition duration-500 ease-in-out hover:text-gray-300"
                        >
                            Home
                        </Link>
                    </li>
                    <li
                        className="text-base z-10 relative animate-fadeInDown"
                        style={{ animationDelay: "1s" }}
                    >
                        <Link
                            href="/products"
                            className="no-underline text-white tracking-wider p-2 transition duration-500 ease-in-out hover:text-gray-300"
                        >
                            Shop
                        </Link>
                    </li>
                    <li
                        className="text-base z-10 relative animate-fadeInDown"
                        style={{ animationDelay: "1.5s" }}
                    >
                        <Link
                            href="/cart"
                            className="no-underline text-white tracking-wider p-2 transition duration-500 ease-in-out hover:text-gray-300"
                        >
                            Cart
                        </Link>
                    </li>
                    <li
                        className="text-base z-10 relative animate-fadeInDown"
                        style={{ animationDelay: "2s" }}
                    >
                        <Link
                            href="/contact"
                            className="no-underline text-white tracking-wider p-2 transition duration-500 ease-in-out hover:text-gray-300"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
