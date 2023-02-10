import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import { SkillInfo } from '../typings'

type Props = {
    skills: SkillInfo[];
}

function Skills({ skills }: Props) {
    return (
        <motion.div
            className='min-h-screen flex flex-col relative overflow-x-visible text-center items-center justify-center sm:text-left lg:flex-row max-w-[2000px] lg:px-10'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
        >
            <h3 className='absolute top-20 uppercase tracking-[20px] text-lightGray text-xl lg:space-y-0 mx-auto'>
                Skills
            </h3>

            <h3 className='absolute top-32 uppercase tracking-[3px] text-lightGray text-sm'>
                hover on a skill for more info
            </h3>

            <div className='grid grid-cols-4 gap-5 xs:p-5 lg:mt-10 grid-flow-row'>
                {skills.slice(0, skills.length/2).map(skill => (
                    <Skill key={skill._id} skill={skill} />
                ))}

                {skills.slice(skills.length/2, skills.length).map(skill => (
                    <Skill key={skill._id} skill={skill} directionLeft/>
                ))}
            </div>
        </motion.div>
    )
}

export default Skills