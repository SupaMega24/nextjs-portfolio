import React from 'react'
import { motion, useScroll } from "framer-motion"
import { useRef } from 'react'
import LiIcon from './LiIcon'

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] 
        mx-auto flex flex-col items-center justify-between'
        >
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className='capitalize font-bold text-2xl'
                >
                    {position}&nbsp;<a href={companyLink} target='_blank'
                        className='text-blue capitalize'
                    >@{company}</a>
                </h3>
                <span className='capitalize font-medium text-dark/75 '>
                    {time} | {address}
                </span>
                <p className='font-medium w-full'>
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
            <h2 className='font-bold text-8xl mb-32 w-full text-center'
            >
                Experience
            </h2>
            <div ref={ref} className='w-[75%] mx-auto relative'>
                <motion.div style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top' />
                <ul className='w-full flex flex-col items-start justify-between ml-4'>

                    <Details

                        position="Software Engineer" company="100devs"
                        companyLink="https://100devs.org/"
                        time="2023-Present" address="(Remote) Los Angeles, CA"
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