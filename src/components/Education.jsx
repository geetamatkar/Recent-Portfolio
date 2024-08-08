import React from 'react'
import { Educations } from '../constants'

const Education = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h1 className='my-20 text-center text-4xl'>Education</h1>
        <div>
            {Educations.map((edu, index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <div className='w-full lg:w-1/4'>
                       <p className="mb-2 text-sm text-neutral-400">{edu.year}</p>
                    </div>

                    <div className='w-full max-w-xl lg:w-3/4'>
                       <h6 className='mb-2 font-semibold'>{edu.degree} -{" "} 
                        
                       </h6>
                       <span className='text-sm text-purple-200'>{edu.university}</span>

                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Education
