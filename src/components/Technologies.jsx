import { RiReactjsLine } from 'react-icons/ri'
import { FaVuejs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { FaPython } from "react-icons/fa";



import React from 'react'

const Technologies = () => {
  return (
    <div>
        <h1 className="my-20 text-center text-5xl font-bold" >Tecnologias</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaVuejs className="text-7xl text-green-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoJavascript className="text-7xl text-yellow-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoFirebase className="text-7xl text-red-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className="text-7xl text-yellow-300"/>
            </div>
        </div>
    </div>
  )
}

export default Technologies