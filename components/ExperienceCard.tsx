import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExperienceInfo } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    experience: ExperienceInfo
}

function ExperienceCard({ experience }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] sm:w-[600px] lg:w-[700px] p-10 bg-[#515151] snap-center opacity-30 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                whileInView={{
                    y: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 1.2,
                }}
                viewport={{ once: true }}
                className='rounded-full h-32 w-32 lg:h-[180px] lg:w-[180px] object-cover hover:object-scale-down object-center'
                src={urlFor(experience?.companyImage).url()}
                alt=''
            />

            <div className='px-0 sm:px-10'>
                <h4 className='text-3xl font-light text-platinum'>{experience.jobTitle}</h4>
                <p className='text-xl font-bold mt-1 text-platinum'>{experience.company}</p>
                <div className='flex space-x-2 my-2'>
                    {/* Tech Used */}
                    {experience.technologies.map(technology => (
                        <Image
                            className='rounded-full px-2 '
                            key={technology._id}
                            src={urlFor(technology.image).url()}
                            alt=''
                            height={40}
                            width={40}
                        />
                    ))}
                </div>
                <p className='uppercase py-5 text-platinum'>
                    {new Date(experience.dateStarted).toDateString()} - {' '} 
                    {experience.currentlyWorking ? 'Present' : new Date(experience.dateEnded).toDateString()}
                </p>
                <ul className='space-y-4 list-disc ml-5 text-lg max-h-60 overflow-y-scroll scrollbar-thin scrollbar-track-[#3F403F] scrollbar-thumb-[#6699CC] snap-center'>
                    {experience.points.map( (point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard