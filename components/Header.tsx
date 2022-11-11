import React from 'react'
import { SocialIcon } from "react-social-icons"
import { motion } from 'framer-motion'
import Link from 'next/link'
import { SocialInfo } from '../typings'

type Props = {
    socials: SocialInfo[];
}

function Header({ socials }: Props) {
    return (
        <header className='sticky top-0 pt-3 px-1 flex items-start justify-between max-w-7xl mx-auto z-30 xl:items-center'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5,
                }}
                className='flex flex-row items-center'
            >
                {/* Social Icons */}
                {socials.map((social) => (
                    <SocialIcon
                        key={social._id}
                        url={social.url}
                        fgColor="#CED0CE"
                        bgColor="transparent"
                        style={{height: '40px'}}
                    />
                ))}

                
            </motion.div>

            <Link href='#contact'>
                <motion.div
                    initial={{
                        x: 500,
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: 1.5,
                    }}
                    className='flex flex-row items-center text-platinum cursor-pointer -mt-0.5 pr-2'
                >
                    <SocialIcon
                        className='cursor-pointer'
                        network='email'
                        fgColor='#CED0CE'
                        bgColor='transparent'
                        style={{ height: 42, width: 42 }}
                    />
                    <p className='uppercase hidden md:inline-flex text-sm text-lightgray' >Get In Touch</p>
                </motion.div>
            </Link>
        </header>
    )
}

export default Header