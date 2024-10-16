import React from 'react'
import { motion, useScroll } from "framer-motion"
import { useRef } from 'react'
import LiIcon from './LiIcon'

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] 
        mx-auto flex flex-col items-center justify-between
        md:w-[80%] '
        >
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className='capitalize font-bold text-2xl
                sm:text-xl xs:text-lg'
                >
                    {position}&nbsp;<a href={companyLink} target='_blank'
                        className='text-blue capitalize'
                    >@{company}</a>
                </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75
                xs:text-sm'
                >
                    {time} | {address}
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {work}
                </p>
            </motion.div>
        </li>
    );
}

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className='my-64 '>
            <h2 className='font-bold text-8xl mb-32 w-full text-center 
            md:text-6xl xs:text-4xl md:mb-16 '
            >
                Experience
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

                <motion.div style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top
                     dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'
                />

                <ul className='w-full flex flex-col items-start justify-between ml-4
                xs:ml-2 '
                >

                    <Details

                        position="Technical Content Writer" company="Cyfrin"
                        companyLink="https://www.cyfrin.io/"
                        time="2024-Present" address="(Remote) APAC"
                        work="At Cyfrin, I developed comprehensive educational content focused on blockchain 
                        and Web3 technologies. Notably, I authored 34 in-depth lessons on Account Abstraction, 
                        breaking down complex concepts into accessible learning materials. Additionally, I crafted 
                        several high-level glossary explainers, ranging from 500 to 1300 words, covering critical 
                        topics such as static analysis, hash functions, decentralized applications (dApps), and 
                        automated market makers (AMMs). These materials were designed to bridge knowledge gaps for 
                        both developers and non-technical audiences, demonstrating my ability to deliver clear and 
                        insightful technical content."
                    />

                    <Details

                        position="Software/Smart Contract Developer" company="100devs/Freelance"
                        companyLink="https://100devs.org/"
                        time="2023-Present" address="(Remote) APAC"
                        work="Collaboratively contributed to the development team, actively 
                        participating in the construction of modern and responsive web 
                        applications by leveraging the MERN stack. Played a key role in the 
                        creation of semantically structured full-stack web applications, ensuring 
                        alignment with project requirements. Applied agile methodologies, including 
                        SCRUM, to enhance project management efficiency and timely delivery. 
                        Additionally, contributed to the preparation of proposals for potential 
                        clients, effectively showcasing technical expertise and presenting project 
                        solutions."

                    />

                    <Details

                        position="Co-Founder" company="victoria ELD"
                        time="2014-2022" address="Cheonan/Seoul, South Korea"
                        work="Was instrumental in guiding
                        and empowering thousands of students and professionals. My consultancy
                        also extended to prestigious corporations in Korea, such as IMB, Google,
                        Goldman Sachs, POSCO, Deloitte, Samil PWC, Adidas, eBay, General
                        Motors, P&G, Shinsegae, LG Electronics and Life Sciences, and SK
                        Energy. Our focus was in honing their English communication skills, ensuring success in
                        pivotal moments like job and university entrance interviews, as well as
                        achieving targeted scores in exams including IELTS, TOEFL, TOEIC,
                        TOEFL JR, GRE, SAT, and OPIc."

                    />

                </ul>
            </div>
        </div>
    )
}

export default Experience