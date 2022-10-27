import React from 'react'
import { motion } from 'framer-motion'
import { ProjectInfo } from '../typings';
import { urlFor } from '../sanity';
import Image from 'next/image';

type Props = {
  projects: ProjectInfo[];
}

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative flex flex-col overflow-hidden text-left sm:flex-row 
      max-w-full justify-evenly items-center z-0'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-lightGray text-xl'>
        Projects
      </h3>

      <div
        className='relative w-full h-screen flex overflow-x-scroll overflow-y-visible 
        snap-x snap-manditory z-20 scrollbar-thin scrollbar-track-[#515151]/30 
        scrollbar-thumb-[#6699CC]/90'
      >
        {projects?.map((project, i) => (
          <div
          key={project._id}
            className='w-screen h-screen flex flex-col flex-shrink-0 snap-center space-y-5 
          items-center justify-center p-20'>
            <motion.img
              initial={{
                y: -300,
                opacity: 0
              }}
              whileInView={{
                y: 0,
                opacity: 1
              }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className='max-h-80'
              src={urlFor(project?.image).url()}
              alt=''
            />

            <div className='space-y-5 px-0 sm:px-10 max-w-6xl'>
              <h4 className='text-3xl font-semibold text-center'>
                <span className='underline decoration-[#6699CC]/90'>
                  Case Study {i + 1} of {projects.length}:
                </span> {' '}
                {project?.title}
              </h4>

              <div className='flex items-center space-x-2 justify-center'>
                {project.technologies.map(technology => (
                  <Image
                    className='rounded-full px-2 '
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt=''
                    height={10}
                    width={10}
                  />
                ))}
              </div>

              <p className='max-h-[80%] text-lg text-justify overflow-y-scroll'>
                {project?.summary}
              </p>
            </div>

          </div>
        ))}
      </div>

      <div
        className='w-full absolute top-[30%] bg-[#6699CC]/30 left-0 h-[500px] 
        -skew-y-12'
      />
    </motion.div>
  )
}

export default Projects