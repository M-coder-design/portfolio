import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import {fadeIn,textVariant} from '../utils/motion';

import { SectionWrapper } from '../hoc'
import { achieve } from '../constants';

const Achievements = () => {
    return (
      <>
        <motion.dev variants = {textVariant()}>
          <h2 className={styles.sectionHeadText}>Achievements</h2>
        </motion.dev>
        <motion.dev variants={fadeIn("","",0.1,1)}
         className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
           <ul className='mt-5 list-disc ml-5 space-y-2'>
            {achieve.map((achievement,index)=>(
                <li key = {`achievement-point-${index}`} className='text-white-100 text-[24px] pl-1 tracking-wider'>{achievement}</li>
             ))}
           </ul>
        </motion.dev>
      </>
    )
  }
  
  export default SectionWrapper(Achievements,"");