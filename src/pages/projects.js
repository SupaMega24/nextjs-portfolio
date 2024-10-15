import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import project1 from "../../public/images/projects/runbroW.png";
import project2 from "../../public/images/projects/lotteryW.png";
import project3 from "../../public/images/projects/random-teamW.png";
import TransitionEffect from '@/components/TransitionEffect'


const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='w-full flex items-center justify-between
            rounded-3xl border border-solid border-dark bg-light
            shadow-2xl p-8 relative rounded-br-2xl dark:bg-dark dark:border-light
            lg:flex-col lg:p-8 sm:rounded-2xl xs:rounded-br-3xl xs:p-4'
        >
            <div className='absolute top-0 -right-2 -z-10 w-[100.8%] h-[103%] 
                rounded-[2.2rem] bg-dark rounded-br-3xl dark:bg-light
                xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'
            />
            <Link
                href={link}
                target="_blank"
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg 
                    lg:w-full'
            >
                <Image src={img} alt={title} className='w-full h-auto'
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 
                lg:w-full lg:pl-0 lg:pt-6'
            >
                <span className='text-blue font-medium text-xl dark:text-primaryDark
                    xs:text-base'
                >
                    {type}
                </span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-2xl font-bold dark:text-light
                        sm:text-sm'
                    >
                        {title}
                    </h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light
                    sm:text-sm'
                >
                    {summary}
                </p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-14'> <GithubIcon /> </Link>

                    <Link href={link} target="_blank" className='ml-6 rounded-lg bg-dark text-light
                        p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark
                        sm:px-4 sm:text-base'
                    >
                        Visit Project
                    </Link>
                </div>
            </div>

        </article>
    )
}

const Project = ({ title, type, img, link, github }) => {
    return (
        <article className='w-full flex items-center justify-center rounded-2xl
            border border-solid border-dark bg-light p-6 relative flex-col shadow-xl
            dark:bg-dark dark:border-light xs:p-4'

        >
            <div className='absolute top-0 -right-2 -z-10 w-[101.8%] h-[103%] 
                rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light 
                md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]'
            />
            <Link href={link} target="_blank" className='w-full cursor-pointer
                overflow-hidden rounded-lg'
            >
                <Image src={img} alt={title} className='w-full h-auto'

                />
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-blue font-medium text-xl dark:text-primaryDark
                    lg:text-lg md:text-base'
                >
                    {type}
                </span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-2xl font-bold
                        lg:text-2xl'
                    >
                        {title}
                    </h2>
                </Link>

                <div className='mt-2 flex items-center justify-between w-full'>

                    <Link href={link} target="_blank" className='underline
                        underline-offset-2 text-lg font-semibold md:text-base'
                    >
                        Visit Project
                    </Link>
                    <Link href={github} target="_blank" className='w-8 
                        md:w-6'
                    >
                        <GithubIcon />
                    </Link>

                </div>
            </div>
        </article>
    )
}

const projects = () => {
    return (
        <>

            <Head>
                <title>CharlieJ | Developer Projects Page</title>
                <meta name="description" content="any description" />
            </Head>

            <TransitionEffect />

            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Brick by Brick Builds Knowledge!" className='mb-16
                    lg:text-!7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
                    />

                    <div className='grid grid-cols-12 gap-24 gap-y-32 
                    xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'
                    >

                        {/* Long banner, main project */}
                        <div className='col-span-12'>
                            <FeaturedProject


                                title="RunBro"
                                img={project1}
                                summary="RunBro is a decentralized platform that rewards users for their physical activity by integrating the 
                                Google Fit API with a unique reward model. Users can buy and sell fitness-related items (such as shoes) while 
                                earning native tokens (RBT) based on their steps. The smart contracts are built on Solidity and Foundry. 
                                The front-end utilizes the MERN stack."
                                link="https://www.runbro.net/"
                                github="https://github.com/ChainlinkHackaton/SmartContracts"
                                type="Featured Project"
                            />
                        </div>

                        {/* short banner, 2 projects */}
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Smart Contract Lottery"
                                img={project2}
                                link="https://github.com/SupaMega24/smart-contract-lottery"
                                github="https://github.com/SupaMega24/smart-contract-lottery"
                                type="Project"
                            />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Random Team Selector"
                                img={project3}
                                link="https://github.com/SupaMega24/fantasy-team-vrf"
                                github="https://github.com/SupaMega24/fantasy-team-vrf"
                                type="Project"
                            />
                        </div>
                    </div>

                </Layout>
            </main>

        </>
    )
}

export default projects