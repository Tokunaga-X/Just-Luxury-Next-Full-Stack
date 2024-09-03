// import { Link } from 'react-router-dom';
import Image from "next/image"
import Link from "next/link"
import React from "react"
import logo from "../../public/images/logo2.png"

const Nav = () => {
    return (
        <div>
            <nav className="fixed top-0 left-0 bg-black bg-opacity-30 z-50 w-full h-[12vh] flex justify-center items-center">
                <Image
                    src={logo}
                    alt="logo"
                    title="logo"
                    className="flex-1 pl-[5vw]"
                />
                <ul className="w-full flex justify-center list-none">
                    <li
                        className="flex-1 text-base z-10 relative animate-fadeInDown"
                        style={{ animationDelay: "0.5s" }}
                    >
                        <Link
                            href="/"
                            className="no-underline text-white tracking-wider p-2 transition duration-500 ease-in-out"
                        >
                            主页
                        </Link>
                    </li>
                    <li
                        className="flex-1 text-base z-10 relative animate-fadeInDown"
                        style={{ animationDelay: "1s" }}
                    >
                        <Link
                            href="/shop"
                            className="no-underline text-white tracking-wider p-2 transition duration-500 ease-in-out"
                        >
                            选购
                        </Link>
                    </li>
                    <li
                        className="flex-1 text-base z-10 relative animate-fadeInDown"
                        style={{ animationDelay: "1.5s" }}
                    >
                        <Link
                            href="/cart"
                            className="no-underline text-white tracking-wider p-2 transition duration-500 ease-in-out"
                        >
                            购物车
                        </Link>
                    </li>
                    <li
                        className="flex-1 text-base z-10 relative animate-fadeInDown"
                        style={{ animationDelay: "2s" }}
                    >
                        <Link
                            href="/contact"
                            className="no-underline text-white tracking-wider p-2 transition duration-500 ease-in-out"
                        >
                            联系
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="absolute top-0 left-0 w-full h-[35vh] bg-cover bg-top after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-[35vh] after:bg-black after:bg-opacity-40"></div>
        </div>
    )
}

export default Nav
