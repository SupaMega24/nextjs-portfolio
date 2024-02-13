import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import profilePic from "../../public/images/profile/profilepic.jpeg"
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'

const about = () => {
    return (
        <>
            <Head>
                <title>CharlieJ | About Page</title>
                <meta name="description" content="any description" />
            </Head>
            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Passion Ignites Innovation!" className='!text-6xl mb-16' />
                    <div className='grid w-full grid-cols-8 gap-16'>
                        <div className='col-span-4 flex flex-col items-start justify-start'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>A Little About Me</h2>
                            <p className='font-medium '>
                                Hi, I&apos;m Charles Jones, a web developer and software engineer with a passion for creating beautiful, functional,
                                and user-centered digital experiences. I am always looking for
                                new and innovative ways to bring my clients&apos; visions to life.
                            </p>
                            <p className='font-medium my-4'>
                                I believe that web development is about more than just making things look pretty – it&apos;s about solving problems and
                                creating intuitive, enjoyable experiences for users.
                            </p>
                            <p className='font-medium '>
                                Whether I&apos;m working on a website, mobile app, or
                                other digital product, I bring my commitment to design excellence and user-centered thinking to
                                every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                            </p>
                        </div>
                        <div className='col-span-4 relative h-max rounded-2xl 
                            border-2 border-solid border-dark bg-light p-8'
                        >
                            <div className='absolute top-0 -right-2 -z-10 w-[102%] h-[103%] 
                                rounded-[2rem] bg-dark'
                            />
                            <Image src={profilePic} alt="CharlieJ"
                                className='w-full h-auto rounded-2xl'
                            />
                        </div>
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
