import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    page: PageInfo;
}

function About({ page }: Props) {
    return (
        <motion.div
            className='flex flex-col relative h-screen text-center sm:text-left lg:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
        >
            <h3 className='absolute top-20 uppercase tracking-[20px] text-lightGray text-xl'>
                About
            </h3>

            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 1.2,
                }}
                viewport={{ once: true }}
                className='-mb-20 mt-8 sm:mt-28 sm:mb-5 rounded-3xl object-cover h-36 w-36 2xs:h-48 2xs:w-48 xs:h-60 xs:w-60 sm:w-96 sm:h-96'
                src={urlFor(page?.profilePic).url()}
            />

            <div className='px-5 xs:px-10 h-72 xs:h-auto overflow-y-scroll scrollbar-thin scrollbar-track-[#515151]/30 scrollbar-thumb-[#6699CC]/90'>
                <h4 className='text-2xl sm:text-4xl font-semibold text-platinum'>
                    A {' '}
                    <span className='underline decoration-[#6699CC]/90'>little</span>{' '}
                    about me
                </h4>
                <p className='text-base mt-2 text-justify text-platinum '>
                    {page?.backgroundInfo}
                </p>
            </div>
        </motion.div >
    )
}

export default About