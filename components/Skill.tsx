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
                    x: directionLeft ? -200 : 200,
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
                className='rounded-full border border-lightGray object-contain hover:object-scale-down h-24 w-24 sm:w-28 sm:h-28 
                lg:h-32 lg:w-32 filter group-hover:grayscale transition duration-300 ease-in-out'
                src={urlFor(skill.image).url()}
                />
            <div
                className='absolute rounded-full opacity-0 group-hover:opacity-80 transition duration-300 
                ease-in-out group-hover:bg-[#E6E8E6] h-24 w-24 sm:w-28 sm:h-28 lg:h-32 lg:w-32 z-0'
            >
                <div className='flex items-center justify-center h-full'>
                    <p className='text-2xl font-bold text-onyx opacity-100'>{skill.progess}</p>
                </div>
            </div>
        </div>
    )
}

export default Skill