"use client"

import React, { useState } from "react"

const Contact: React.FC = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [mail, setMail] = useState("")
    const [message, setMessage] = useState("")

    const checkInput = () => {
        console.log(name, phone, mail, message)
        setName("")
        setPhone("")
        setMail("")
        setMessage("")
    }

    return (
        <div className="h-[calc(100vh-10vh)] pt-[16vh] bg-gray-900 bg-opacity-90 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-3xl mx-auto bg-gray-800 shadow-md rounded-lg overflow-hidden">
                <div className="px-6 py-8">
                    <h2 className="text-3xl font-bold text-center text-white mb-8">
                        联系我们
                    </h2>
                    <div className="space-y-6">
                        <input
                            className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="名字"
                        />
                        <input
                            className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            placeholder="电话"
                        />
                        <input
                            className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={mail}
                            onChange={e => setMail(e.target.value)}
                            placeholder="邮箱"
                        />
                        <textarea
                            className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows={4}
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            placeholder="具体信息"
                        />
                        <button
                            className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
                            onClick={checkInput}
                        >
                            提交你的意见
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
