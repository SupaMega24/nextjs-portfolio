import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import writing1 from "../../public/images/projects/cyfrin.png";
import writing2 from "../../public/images/projects/bod.png";
import writing3 from "../../public/images/projects/eps.png";
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


                                title="Cyfrin Updraft"
                                img={writing1}
                                summary="Cyfrin is a blockchain security firm specializing in smart contract audits and Web3 education. 
                                I write technical content for them, including a comprehensive 34-lesson series on Account Abstraction in the 
                                Advanced Foundry Course, aimed at making complex blockchain concepts more accessible to learners and developers."
                                link="https://updraft.cyfrin.io/courses/advanced-foundry"
                                github="https://github.com/Cyfrin/Updraft/tree/main/courses/advanced-foundry/6-account-abstraction"
                                type="Technical Content Writing"
                            />
                        </div>

                        {/* short banner, 4 projects */}
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Static Analysis"
                                img={writing4}
                                link="https://www.cyfrin.io/glossary/static-analysis"
                                github="https://www.cyfrin.io/glossary/static-analysis"
                                type="Cyfrin Glossary"
                            />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Hash Function"
                                img={writing5}
                                link="https://www.cyfrin.io/glossary/hash-function"
                                github="https://www.cyfrin.io/glossary/hash-function"
                                type="Cyfrin Glossary"
                            />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Battle of the Docs"
                                img={writing2}
                                link="https://battleofthedocs.hashnode.dev/"
                                github="https://github.com/SupaMega24/battle-of-the-docs"
                                type="web3 Educational Content"
                            />
                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="EPS"
                                img={writing3}
                                link="https://epsdream.com/default/"
                                github="https://github.com/SupaMega24/eps-content"
                                type="Web Development Content"
                            />
                        </div>
                    </div>

                </Layout>
            </main>

        </>
    )
}

export default projects