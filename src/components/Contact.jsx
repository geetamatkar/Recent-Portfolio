import React from 'react'
import { useForm } from 'react-hook-form'

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors }
  } = useForm()

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen '>
      <form
        onSubmit={onSubmit}
        action='https://formsubmit.co/a58e8a1ba2416c0ff9002fcd84cf25cb'
        method='POST'
        className='w-full max-w-lg  p-8 rounded-lg shadow-lg'
      >
        <h2 className=' my-20 text-4xl text-center'>Contact Me</h2>

        <input
          className="w-full p-3 mb-4 text-slate-950 font-semibold placeholder-opaque-black rounded-md"
          type="text"
          placeholder="NAME"
          {...register("name", {
            required: true,
            maxLength: 100,
          })}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mb-2">
            {errors.name.type === "required" && "This field is required."}
            {errors.name.type === "maxLength" && "Max length is 100 characters."}
          </p>
        )}

        <input
          className="w-full p-3 mb-4 text-slate-950 font-semibold placeholder-opaque-black rounded-md"
          type="text"
          placeholder="EMAIL"
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mb-2">
            {errors.email.type === "required" && "This field is required."}
            {errors.email.type === "pattern" && "Invalid email address."}
          </p>
        )}

        <textarea
          className="w-full p-3 mb-4  text-slate-950 font-semibold placeholder-opaque-black rounded-md"
          placeholder="MESSAGE"
          rows="6"
          {...register("message", {
            required: true,
            maxLength: 3000,
          })}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mb-2">
            {errors.message.type === "required" && "This field is required."}
            {errors.message.type === "maxLength" && "Max length is 3000 characters."}
          </p>
        )}

        <button
          className="w-full p-3 bg-white font-semibold text-deep-blue mt-5 hover:bg-red-500 hover:text-white transition duration-500 rounded-md"
          type="submit"
        >
          SEND MESSAGE
        </button>
      </form>
    </div>
  )
}

export default Contact
