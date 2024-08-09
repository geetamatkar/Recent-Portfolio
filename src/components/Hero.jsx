import React from 'react'
import {para} from '../constants'
import { FaLinkedin, FaGithub, FaFileAlt, FaEnvelope } from 'react-icons/fa'
import profilePic from '../assets/profile-photo.png'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

const Hero = () => {

    const [text, count] = useTypewriter({
        words:["Software Engineer","Full Stack Developer"],
        loop: true,
        delaySpeed: 2000,
      })

  return (
    <div className=' border-neutral-900 pb-4 lg:mb-40 h-full'>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <h1 className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>
                Geeta Matkar
                </h1>
                <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-400 bg-clip-text text-4xl tracking-tight text-transparent'>
                    I'm a {text}
                </span>
                <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                    {para}
                </p>

                <div className="flex flex-row items-center space-x-4 mt-4">
                        <a href="https://www.linkedin.com/in/geeta-matkar/" target="_blank" rel="noopener noreferrer">
                            <div className="bg-gray-200 rounded-full p-3">
                                <FaLinkedin className="text-2xl text-blue-600" />
                            </div>
                        </a>
                        
                        <a href="https://github.com/geetamatkar" target="_blank" rel="noopener noreferrer">
                            <div className="bg-gray-200 rounded-full p-3">
                                <FaGithub className="text-2xl text-black" />
                            </div>
                        </a>

                        <a href="https://drive.google.com/file/d/1ie9kGwZbHAhZit3klQGGA9vN256ATFFP/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                            <div className="bg-gray-200 rounded-full p-3">
                                <FaFileAlt className="text-2xl text-gray-600" />
                            </div>
                        </a>

                        <a href="mailto:geetamatkar1@gmail.com" target="_blank" rel="noopener noreferrer">
                            <div className="bg-gray-200 rounded-full p-3">
                                <FaEnvelope className="text-2xl text-red-500" />
                            </div>
                        </a>
                </div>



            </div>
            </div>
        
            {/*<div className='w-full lg:w-1/2 lg:p-8 mt-10'>
            <div className="flex justify-center">
                <img src={profilePic} alt="GM" className='w-48 h-auto lg:w-72 lg:h-85' />
            </div>

            </div>*/}

            
        
        </div>

    </div>
  )
}

export default Hero