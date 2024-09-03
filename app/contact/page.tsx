"use client"

import React, { useState } from "react"

const Contact: React.FC = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [mail, setMail] = useState("")
    const [message, setMessage] = useState("")

    const checkInput = () => {
        console.log(name, phone)
        setName("")
        setPhone("")
    }

    return (
        <div className="mt-[35vh]">
            <div className="flex flex-col justify-center items-center h-[50vh] w-full">
                <input
                    className="max-w-[50rem] m-2 p-2 border rounded lg:max-w-[30rem] sm:max-w-[20rem]"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="名字"
                />
                <input
                    className="max-w-[50rem] m-2 p-2 border rounded lg:max-w-[30rem] sm:max-w-[20rem]"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="电话"
                />
                <input
                    className="max-w-[50rem] m-2 p-2 border rounded lg:max-w-[30rem] sm:max-w-[20rem]"
                    value={mail}
                    onChange={e => setMail(e.target.value)}
                    placeholder="邮箱"
                />
                <textarea
                    className="max-w-[50rem] m-2 p-2 border rounded lg:max-w-[30rem] sm:max-w-[20rem]"
                    rows={4}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="具体信息"
                />
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={checkInput}
                >
                    提交你的意见
                </button>
            </div>
        </div>
    )
}

export default Contact
