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
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[350px] 
                            xs:w-[465px] sm:w-[620px] lg:w-[825px] p-10  bg-[#3e4852]/50 snap-center 
                            opacity-30 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-y-scroll scrollbar-thin scrollbar-track-[#3F403F] scrollbar-thumb-[#6699CC]'>
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
                className='rounded-3xl flex-shrink-0 h-28 w-28 xs:h-36 xs:w-36 lg:h-[180px] lg:w-[180px] object-fill hover:object-scale-down object-center'
                src={urlFor(experience?.companyImage).url()}
                alt=''
            />

            <div className='px-0 sm:px-10'>
                <h4 className='text-xl xs:text-3xl font-light text-platinum'>{experience.jobTitle}</h4>
                <p className='text-md xs:text-xl font-bold mt-1 text-platinum'>{experience.company}</p>
                <div className='flex rounded-lg my-2'>
                    {/* Tech Used */}
                    {experience.technologies.map(technology => (
                        <Image
                            className='rounded-lg px-1 '
                            key={technology._id}
                            src={urlFor(technology.image).url()}
                            alt=''
                            height={40}
                            width={40}
                        />
                    ))}
                </div>
                <p className='uppercase text-sm xs:text-lg sm:py-5 text-platinum'>
                    {new Date(experience?.dateStarted).toDateString()} - {' '}
                    {experience.currentlyWorking ? 'Present' : new Date(experience.dateEnded).toDateString()}
                </p>
                <ul className='space-y-4 ml-5 text-sm xs:text-lg max-h-60 snap-center'>
                    {experience.points.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard