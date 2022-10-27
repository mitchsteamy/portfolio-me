import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { ExperienceInfo } from '../typings'

type Props = {
    experiences: ExperienceInfo[],
}

function Experience({ experiences }: Props) {
    return (
        <motion.div
            className='h-screen flex flex-col relative overflow-hidden text-left sm:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
        >
            <h3 className='absolute top-20 uppercase tracking-[20px] text-lightGray text-xl mb-10'>
                Experience
            </h3>

            <div 
            className='flex max-w-full space-x-5 overflow-x-scroll snap-x snap-mandatory mt-10
            scrollbar-thin scrollbar-track-[#515151]/30 scrollbar-thumb-[#6699CC]/90'
            >
                {experiences.map(experience => (
                    <ExperienceCard key={experience._id} experience={experience}  />
                ))}
            </div>
        </motion.div>
    )
}

export default Experience