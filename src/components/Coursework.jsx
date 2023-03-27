import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import {subjects} from '../constants'
import {fadeIn,textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => (
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

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);


const CourseWork = () => {
  return (
    <>
      <motion.dev variants = {textVariant()}>
        <h2 className={styles.sectionHeadText}>Coursework</h2>
      </motion.dev>
      {/* <motion.p variants={fadeIn("","",0.1,1)}
       className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I have strong grasp on the following core subjects of my graduation course
      </motion.p> */}
      <div className='mt-20 flex flex-wrap gap-10'>
        {subjects.map((service,index)=>(
          <ServiceCard key={service.title} index = {index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(CourseWork,"");