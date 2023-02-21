import React from 'react'
import { motion } from 'framer-motion'

type Props = object;

function BackgroundCircles(_: Props) {
  return (
    <motion.div 
    initial={{
      opacity: 0,
    }}
    animate={{
      scale: [1,2,3,3,1],
      opacity: [0.1, 0.2, 0.8, 0.1, 1.0],
      borderRadius: ['20%', '30%', '50%', '80%', '20%']
    }} 
    transition={{
      duration: 1.5,
    }}
    className='relative flex justify-center items-center mt-20 -mb-[72px] '
    >
      <div className='absolute border border-[#303840] rounded-3xl h-[150px] w-[150px] mt-52 animate-ping'/>
      <div className='absolute border border-[#303840] rounded-3xl h-[200px] w-[200px] mt-52'/>      
      <div className='absolute border border-[#303840] rounded-3xl h-[300px] w-[300px] mt-52'/>
      <div className='absolute border border-[#6699CC] rounded-3xl h-[500px] w-[320px] sm:h-[600px] sm:w-[600px] mt-52 opacity-20 animate-pulse'/>
      <div className='absolute border border-[#303840] rounded-3xl h-[750px] w-[750px] mt-52'/>
    </motion.div>
  )
}

export default BackgroundCircles