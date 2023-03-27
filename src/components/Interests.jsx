import React from "react";
import { motion } from "framer-motion";
import Tilt from 'react-tilt'

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { interests, testimonials } from "../constants";

const InterestCard = ({ index, title, icon }) => (
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
            alt={`${title}`}
            className='w-16 h-16 object-contain'
          />
  
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );

const Interest = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          {/* <p className={styles.sectionSubText}>What others say</p> */}
          <h2 className={styles.sectionHeadText}>Interests</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap justify-between gap-7`}>
        {interests.map((interest, index) => (
          <InterestCard key={interest.title} index={index} {...interest} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Interest, "");