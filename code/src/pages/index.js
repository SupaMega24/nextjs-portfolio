import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/greyshirt.png";
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import HireMeButton from '@/components/HireMeButton';
import TransitionEffect from '@/components/TransitionEffect';

export default function Home() {
  return (
    <>
      <Head>
        <title>Charlie&apos;s Portfolio</title>
        <meta name="description" content="Generated by create next app" />

      </Head>

      <TransitionEffect />

      <main className='flex items-center text-dark min-h-screen dark:text-light '>
        <Layout className='pt-0 md:p-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} alt="CharlieJ" className='w-full h-auto lg:hidden md:inline-block md:w-full'
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>

              <AnimatedText text="On a Mission to Build and Improve Web3" className='!text-6xl !text-left
              xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'
              />

              <p className='my=4 text-base font-medium md:text-sm sm:text-xs'>
                I want to help connect the world to web3 by developing secure and
                user-friendly smart contracts. My usually tools of choice are Solidity, Foundry, and JavaScript.
                Explore my latest projects and articles, showcasing my love for web3 learning and development.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/Tech Resume_Web3.pdf" target={'_blank'}
                  className='flex items-center bg-dark text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark 
                  border-2 border-solid border-transparent hover:border-dark
                  dark:text-dark dark:bg-light hover:dark:bg-dark 
                  hover:dark:text-light hover:dark:border-blue md:p-2 md:px-4 md:text-base'
                // download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link href="mailto:victoriaeld24@gmail.com"
                  className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light
                  md:text-base'
                >
                  Contact
                </Link>
              </div>

            </div>
          </div>
        </Layout>

        <HireMeButton />
        {/* <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
          <Image src={lightBulb} alt="CharlieJ" className='w-full h-auto' />
        </div> */}
      </main>
    </>
  )
}
