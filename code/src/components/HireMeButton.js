import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const HireMeButton = () => {
    return (
        <div className='fixed left-4 bottom-8 
            flex items-center justify-center overflow-hidden'
        >
            <div className='w-48 h-auto flex items-center justify-center relative'>
                <CircularText className={"fill-dark animate-spin-slow"} />
                <Link href="mailto:victoriaeld24@gmail.com"
                    className='flex items-center justify-center absolute 
                    left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue
                    text-light shadow-md border border-solid border-blue
                    rounded-full w-20 h-20 font-semibold hover:bg-light hover:text-blue'
                >
                    Hire Me
                </Link>
            </div>

        </div>
    )
}

export default HireMeButton