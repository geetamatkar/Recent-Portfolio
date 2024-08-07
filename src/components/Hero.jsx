import React from 'react'
import {para} from '../constants'
import { FaLinkedin, FaGithub, FaFileAlt, FaEnvelope } from 'react-icons/fa'
import profilePic from '../assets/profile-photo.png'

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <h1 className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>
                Geeta Matkar
                </h1>
                <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-400 bg-clip-text text-4xl tracking-tight text-transparent'>
                    Software Engineer
                </span>
                <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                    {para}
                </p>

                <div className="flex lg:flex-row flex-col items-center space-x-0 space-y-4 lg:space-y-0 lg:space-x-4 mt-8">
                        <div className="bg-gray-200 rounded-full p-3">
                            <FaLinkedin className="text-2xl text-blue-600" />
                        </div>
                        <div className="bg-gray-200 rounded-full p-3">
                            <FaGithub className="text-2xl text-black" />
                        </div>
                        <div className="bg-gray-200 rounded-full p-3">
                            <FaFileAlt className="text-2xl text-gray-600" />
                        </div>
                        <div className="bg-gray-200 rounded-full p-3">
                            <FaEnvelope className="text-2xl text-red-500" />
                        </div>
                    </div>



            </div>
            </div>

            <div className='w-full lg:w-1/2 lg:p-8 '>
            <div className="flex justify-center">
                <img src={profilePic} alt="GM" className='w-50 h-50 lg:w-72 lg:h-85 object-cover' />
            </div>

            </div>
        
        </div>

    </div>
  )
}

export default Hero