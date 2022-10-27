import React from 'react'
import { PhoneIcon, MapIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string,
};

type Props = {}

function Contact({ }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:mitch.embry61@gmail?subject=${formData.subject}&
    body=Hi, my name is ${formData.name}. ${formData.message}`;
  };

  return (
    <div className='h-screen relative flex flex-col text-center items-center justify-evenly mx-auto sm:text-left sm:flex-row'>
      <h3 className='absolute top-20 uppercase tracking-[20px] text-lightGray text-xl'>
        Contact
      </h3>

      <div className='flex flex-col space-y-10'>
        <h4 className='text-2xl font-semibold text-center'>
          I have just what you need.{' '}
          <span className='underline decoration-[#6699CC]/90 new text-end'>
            Lets Talk.
          </span>
        </h4>

        <div className='space-y-8'>
          <div className='flex items-center space-x-2 justify-center'>
            <PhoneIcon className='text-[#6699CC] h-7 w-7 animate-pulse' />
            <p className='text-xl'>1-502-640-9105</p>
          </div>

          <div className='flex items-center space-x-2 justify-center'>
            <EnvelopeIcon className='text-[#6699CC] h-7 w-7 animate-pulse' />
            <p className='text-xl'>mitch.embry61@gmail.com</p>
          </div>

          <div className='flex items-center space-x-2 justify-center'>
            <MapIcon className='text-[#6699CC] h-7 w-7 animate-pulse' />
            <p className='text-xl'>7214 Earl Dr Louisville, KY 40258</p>
          </div>
        </div>

        <form
          className='flex flex-col space-y-2 w-[70%] sm:w-fit mx-auto'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-2 mx-auto'>
            <input
              placeholder='Name'
              className='contactInput'
              type='text'
              {...register('name')} />
            <input
              placeholder='Email'
              className='contactInput'
              type='text'
              {...register('email')} />
          </div>

          <input
            placeholder='Subject'
            className='contactInput'
            type='text'
            {...register('subject')} />

          <textarea
            placeholder='Message'
            className='contactInput'
            {...register('message')} />
          <button
            className='bg-[#6699CC] py-5 px-10 rounded-md text-platinum font-bold 
          text-lg'>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact;
