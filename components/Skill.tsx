import React from 'react'
import { motion } from 'framer-motion'
import { SkillInfo } from '../typings'
import { urlFor } from '../sanity';

type Props = {
    skill: SkillInfo;
    directionLeft?: boolean;
};

function Skill({ skill, directionLeft }: Props) {
    return (
        <div className='group relative flex cursor-pointer'>
            <motion.img
                initial={{
                    x: directionLeft ? 90 : -90,
                    opacity: 0,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 1,
                }}
                viewport={{ once: true }}
                className='rounded-md object-contain h-16 w-16 xs:w-20 xs:h-20 lg:w-28 lg:h-28 
                 filter group-hover:grayscale transition duration-300 ease-in flex flex-shrink-0'
                src={urlFor(skill.image).url()}
                />
            <div
                className='absolute rounded-md opacity-0 group-hover:opacity-80 transition duration-300 
                ease-in group-hover:bg-[#E6E8E6] h-16 w-16 xs:w-20 xs:h-20 lg:w-28 lg:h-28 z-0'
            >
                <div className='flex items-center justify-center h-full'>
                    <p className='text-xs lg:text-base font-bold text-onyx opacity-100'>{skill.progess}</p>
                </div>
            </div>
        </div>
    )
}

export default Skill