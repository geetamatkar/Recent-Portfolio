import logo from '../assets/logo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaFile } from 'react-icons/fa6'
import { IoMdMail } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import React from 'react'

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="" className='h-8 pl-5'/>
        </div>
        <div className='m-8 flex justify-center items-center gap-4 text-2xl'>
            <FaLinkedin/>
            <FaGithub/>
            <FaFile/>
            <IoMdMail/>
        </div>
    </nav>
  )
}

export default Navbar