import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const HireMeButton = () => {
    return (
        <div className='fixed left-4 bottom-8 
            flex items-center justify-center overflow-hidden 
            md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute'
        >
            <div className='w-48 h-auto flex items-center justify-center relative md:w-24 '>

                {/* <CircularText className={"fill-dark animate-spin-slow dark:fill-light"} /> */}

                <Link href="mailto:charliej.dev@outlook.com"
                    className='flex items-center justify-center absolute 
                    left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue
                    text-light shadow-md border border-solid border-blue
                    rounded-full w-20 h-20 font-semibold hover:bg-light hover:text-blue
                    md:w-12 md:h-12 md:text-[10px]'
                >
                    Hire Me
                </Link>
            </div>

        </div>
    )
}

export default HireMeButton