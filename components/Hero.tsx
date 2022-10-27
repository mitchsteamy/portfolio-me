import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';

import Link from 'next/link';
import Image from 'next/image'
import profilePic from '../assets/profile-pic.jpg'
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';


type Props = {
    page: PageInfo
}

function Hero({ page }: Props) {
    const [text, count] = useTypewriter({
        words: [
            'Hi, My name is Mitch Embry',
            'this-is-my-portfolio.js',
            '<LetsBuildAThing />'
        ],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <div className='h-screen relative flex flex-col space-y-10 items-center justify-center text-center mx-auto overflow-hidden z-20'>
            <BackgroundCircles />
            <Image
                className='relative rounded-full mx-auto object-cover mb-20 z-20'
                height={200}
                width={200}
                src={urlFor(page?.heroImage).url()}
                alt=''
            />
            <div className='z-20'>
                <h2 className='text-md uppercase text-lightGray pb-2 tracking-[8px] lg:tracking-[10px] '>Full-Stack Web Developer</h2>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl font-semibold px-10'>
                    <span>{text}</span>
                    <Cursor cursorColor='#6699CC' />
                </h1>
                <div className='pt-2'>
                    <Link href='#about'>
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href="#experience">
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href='#skills'>
                        <button className='heroButton'>Skillls</button>
                    </Link>
                    <Link href='#projects'>
                        <button className='heroButton'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero