import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import {services,contactInfo} from '../constants'
import {fadeIn,textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc'

const ContactCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-justify'>
          {title === "link" ? <a className='underline hover:text-blue-600' href='https://www.linkedin.com/in/mayukh-ghosh-523432203/'>Linkedln</a> : title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.dev variants = {textVariant()}>
        <p className={styles.sectionSubText}>Intoduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.dev>
      <motion.p variants={fadeIn("","",0.1,1)}
       className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        A Self Driven and meticulous B.Tech in Computer Science and Engineering undergraduate student, currently in the final year, with strong computer programming and problem solving skills seeking entry level opportunities in the field of software development with a passion for exploring various technologies. 
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10 justify-between'>
        {contactInfo.map((contact,index)=>(
          <ContactCard key={contact.title} index = {index} {...contact} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,"about");