import React from 'react'

import { RiReactjsLine } from "react-icons/ri";
import { RiHtml5Line } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { RiJavaLine } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h1 className='my-20 text-center text-4xl'>Tech Stack</h1>

        <div className="flex flex-wrap items-center justify-center gap-4">

            {/*<div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiHtml5Line className='text-7xl text-orange-400'/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                 <FaCss3Alt className='text-7xl ' style={{ color: '#1572B6' }}/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                 <RiJavascriptFill className='text-7xl text-yellow-400'/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className='text-7xl ' style={{ color: '#3776AB' }}/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiJavaLine className='text-7xl' style={{ color: '#007396' }}/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssFill className='text-7xl text-cyan-400'/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiNodejsLine className='text-7xl' style={{ color: '#339933' }}/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className='text-7xl text-green-500'/>
            </div>*/}


            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiHtml5Line className='text-7xl '/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                 <FaCss3Alt className='text-7xl '/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                 <RiJavascriptFill className='text-7xl'/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className='text-7xl '/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className='text-7xl ' />
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiJavaLine className='text-7xl' />
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssFill className='text-7xl '/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiNodejsLine className='text-7xl' />
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className='text-7xl '/>
            </div>

        </div>
    </div>
  )
}

export default Technologies