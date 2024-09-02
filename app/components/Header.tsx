export default function Header() {
    return (
        <header className="bg-gray-800 text-white h-20 flex items-center justify-between px-6">
            <div className="text-2xl font-bold">Just-Luxury</div>
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <a href="/" className="hover:text-gray-300">
                            首页
                        </a>
                    </li>
                    <li>
                        <a href="/shop" className="hover:text-gray-300">
                            选购
                        </a>
                    </li>
                    <li>
                        <a href="/cart" className="hover:text-gray-300">
                            购物车
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="hover:text-gray-300">
                            联系
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
