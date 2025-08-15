import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import writing1 from "../../public/images/projects/cyfrin.png";
import writing2 from "../../public/images/projects/eip.png";
import writing3 from "../../public/images/projects/liquidityPool.jpg";
import writing4 from "../../public/images/projects/static-analysis.png";
import writing5 from "../../public/images/projects/hash-function.png";
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
                <Image src={img} alt={title} className='w-full h-300px object-cover'
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
                <Image src={img} alt={title} className='w-full h-[400px] object-cover'

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
                <title>CharlieJ | Tech Writing Page</title>
                <meta name="description" content="any description" />
            </Head>

            <TransitionEffect />

            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Enhancing Knowledge of the Decentralized Web!" className='mb-16
                    lg:text-!7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
                    />

                    <div className='grid grid-cols-12 gap-24 gap-y-32 
                    xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'
                    >

                        {/* Long banner, main project */}
                        <div className='col-span-12'>
                            <FeaturedProject

                                title="FluentDev: English for Web3 and DeFi Professionals"
                                img={writing1}
                                summary="FluentDev is an educational platform I am currently building to help Web3 developers improve their English communication skills while mastering blockchain concepts. 
                                The lessons I'm creating aim to combine technical topics such as smart contract functionality, consensus mechanisms, and decentralized finance (DeFi) with targeted language instruction. 
                                Content is designed in an academic structure with clear analogies and real-world applications."
                                link="https://fluentdev.vercel.app/"
                                github="https://github.com/SupaMega24/fluentDev"
                                type="Technical Educational Content Design & Writing"
                            />
                        </div>

                        {/* short banner, 4 projects */}
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Automated Market Maker (AMM)"
                                img={writing4}
                                link="https://www.cyfrin.io/glossary/amm"
                                github="https://www.cyfrin.io/glossary/amm"
                                type="DeFi Concept Explainer"
                            />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Liquidity Pool"
                                img={writing3}
                                link="https://www.cyfrin.io/glossary/liquidity-pool"
                                github="https://www.cyfrin.io/glossary/liquidity-pool"
                                type="DeFi Concept Explainer"
                            />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Hash Function"
                                img={writing5}
                                link="https://www.cyfrin.io/glossary/hash-function"
                                github="https://www.cyfrin.io/glossary/hash-function"
                                type="Web3 Concept Explainer"
                            />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Demystifying EIPs"
                                img={writing2}
                                link="https://charliej.hashnode.dev/demystifying-eips-the-blueprint-for-ethereums-evolution"
                                github="https://github.com/SupaMega24"
                                type="Web3 Educational Content"
                            />
                        </div>

                    </div>

                </Layout>
            </main>

        </>
    )
}

export default projects