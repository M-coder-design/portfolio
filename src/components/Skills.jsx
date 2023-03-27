import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'

import 'react-vertical-timeline-component/style.min.css'

import { styles } from '../styles';
import { skillSet } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const SkillsCard = ({skills}) =>(
  <VerticalTimelineElement
   contentStyle={{background: '#1d1836',color: '#fff'}}
   contentArrowStyle={{ borderRight: '7px solid #232631' }}
   iconStyle={{ background : skills.iconBg }}
   icon={
    <div className='flex justify-center items-center w-full h-full'>
      <img 
      src={skills.icon}
      alt={skills.title}
      className="w-[60%] h-[60%] object-contain"
      />
    </div>
   }
   >
    <div>
      <h3 className='text-white text-[24px] font-bold'>{skills.title}</h3>
      <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
        {skills.level}
      </p>
    </div>
    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {skills.points.map((point,index)=>(
        <li key = {`experience-point-${index}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>What I have done so far</p> */}
        <h2 className={styles.sectionHeadText}>Skill Set</h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {skillSet.map((skills,index)=>(
            <SkillsCard key={index} skills={skills}/>
          ))}
        </VerticalTimeline>
      </div>
    </>  
  )
}

export default SectionWrapper(Skills, "skills");