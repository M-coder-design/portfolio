import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'

import 'react-vertical-timeline-component/style.min.css'

import { styles } from '../styles';
import { education } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const EducationCard = ({education}) =>(
  <VerticalTimelineElement
   contentStyle={{background: '#1d1836',color: '#fff'}}
   contentArrowStyle={{ borderRight: '7px solid #232631' }}
   date={education.date}
   iconStyle={{ background : education.iconBg }}
   icon={
    <div className='flex justify-center items-center w-full h-full'>
      <img 
      src={education.icon}
      alt={education.institute_name}
      className="w-[60%] h-[60%] object-contain"
      />
    </div>
   }
   >
    <div>
      <h3 className='text-white text-[24px] font-bold'>{education.institute_name}</h3>
      <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
        {education.class}
      </p>
    </div>
    <div className='mt-5 ml-5 space-y-2'>
      <p className='text-white-100 text-[14px] pl-1 tracking-wider'>
        {education.marks}
      </p>
    </div>
  </VerticalTimelineElement>
)

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Education</h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {education.map((education,index)=>(
            <EducationCard key={index} education={education}/>
          ))}
        </VerticalTimeline>
      </div>
    </>  
  )
}

export default SectionWrapper(Education, "education");