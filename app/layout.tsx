import "./globals.css"

import Footer from "./components/Footer"
import Header from "./components/Header"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })
const poppins = Montserrat({
    weight: ["400", "600", "700"],
    subsets: ["latin"],
    display: "swap",
})

export const metadata: Metadata = {
    title: "Just-Luxury",
    description: "Luxury Shopping Platform",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="zh" className="h-full">
            <body className={`${poppins.className} flex flex-col h-screen`}>
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
            </body>
        </html>
    )
}
