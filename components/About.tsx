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
                className='-mb-20 sm:mt-20 sm:mb-0 flex-shrink-0 rounded-full sm:rounded-lg object-cover h-52 w-52 sm:h-72 sm:w-96 lg:w-[500px] lg:h-[600px]'
                src={urlFor(page?.profilePic).url()}
            />

            <div className='px-5 sm:px-10 h-96 overflow-y-scroll scrollbar-thin scrollbar-track-[#515151]/30 scrollbar-thumb-[#6699CC]/90'>
                <h4 className='text-4xl font-semibold text-platinum'>
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