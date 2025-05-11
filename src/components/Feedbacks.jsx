import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { educations } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-[#1a1a2e] hover:bg-[#202040] transition-colors duration-300 p-6 rounded-2xl shadow-lg max-w-sm w-full"
  >
    <p className="text-white text-[16px] leading-relaxed">{testimonial}</p>

    <div className="mt-6 flex items-center justify-between">
      <div>
        <p className="text-white font-semibold text-[15px]">{name}</p>
        <p className="text-gray-400 text-[13px] mt-1">
          {company} <br />
          <span className="italic text-[12px]">({designation})</span>
        </p>
      </div>

      <img
        src={image}
        alt={`feedback_by-${name}`}
        className="w-12 h-12 rounded-full object-cover border-2 border-white"
      />
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="mt-16 bg-[#0f0f1a] rounded-[20px] shadow-xl"
    >
      <div className={`bg-gradient-to-r from-[#1f1f2e] to-[#1a1a2e] rounded-t-[20px] ${styles.padding} min-h-[280px]`}>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-white text-center`}>
            My education has been a journey of self-discovery and growth. My educational details are as follows.
          </p>
          <h2 className={`${styles.sectionHeadText} text-center text-white`}>Education</h2>
        </motion.div>
      </div>

      <motion.div
        className={`-mt-20 pb-14 px-5 md:px-10 flex flex-wrap justify-center gap-7`}
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {educations.map((edu, index) => (
          <FeedbackCard key={edu.name} index={index} {...edu} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SectionWrapper(Feedbacks, "");
