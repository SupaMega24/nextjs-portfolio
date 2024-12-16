import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import profilePic from "../../public/images/profile/profilepic.jpeg"
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'

const about = () => {
    return (
        <>
            <Head>
                <title>CharlieJ | About Page</title>
                <meta name="description" content="any description" />
            </Head>

            <TransitionEffect />

            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Passion Ignites Innovation!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl
                    sm:mb-8'
                    />
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>

                        {/* about column */}

                        <div className='col-span-5 flex flex-col items-start justify-start md:order-2 md:col-span-8'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>A Little About Me</h2>
                            <p className='font-medium '>
                                I&apos;m a former global business English coach turned web3 technical writer with a unique story and a burning passion for blockchain technology.
                                My journey into the tech world started unexpectedly when I was helping a client solve a problem and stumbled upon the
                                fascinating world of programming. It didn&apos;t take long before I was completely hooked, especially on the revolutionary potential of web3.
                            </p>
                            <p className='font-medium my-4'>
                                Like many, I faced significant challenges when the COVID-19 pandemic hit. My business, which I had poured my heart and soul into, was severely impacted.
                                But rather than let this setback define me, I decided to seize the opportunity to pivot and turn my newfound passion into a career.
                            </p>
                            <p className='font-medium '>
                                Since then, I&apos;ve immersed myself in the world of web3 development, diving deep into blockchain technology and smart contracts. Today, I focus on producing
                                in-depth technical content and conducting research on emerging technologies in the Web3 space. My work includes creating detailed explainers, documentation, and
                                educational resources that empower both developers and non-technical audiences to engage with decentralized systems. I am excited to collaborate with innovative
                                teams to build content that drives forward the understanding and development of the decentralized web.
                            </p>
                            <p className='font-medium my-4'>
                                Now, I&apos;m on the lookout for exciting opportunities to bring my unique perspective and dedication to a forward-thinking team. Let&apos;s build something amazing together!
                            </p>
                        </div>

                        {/* profilePic column */}

                        <div className='col-span-3 relative h-max rounded-2xl 
                            border-2 border-solid border-dark bg-light p-8 
                            dark:bg-dark dark:border-light md:order-1 md:col-span-8'
                        >
                            <div className='absolute top-0 -right-2 -z-10 w-[102%] h-[103%] 
                                rounded-[2rem] bg-dark dark:bg-light '
                            />
                            <Image src={profilePic} alt="CharlieJ"
                                className='w-full h-auto rounded-2xl'
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                            />
                        </div>

                        {/* stats column; not using, not responsive */}

                        {/* <div className='col-span-2 flex flex-col items-end justify-between'>
                            <div>
                                <span>
                                    50+
                                </span>
                                <h2>satisfied clients</h2>
                            </div>
                            <div>
                                <span>
                                    40+
                                </span>
                                <h2>projects completed</h2>
                            </div>
                            <div>
                                <span>
                                    1+
                                </span>
                                <h2>years experience</h2>
                            </div>
                        </div> */}

                    </div>
                    <div>
                        <Skills />
                        <Experience />
                        <Education />
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default about
