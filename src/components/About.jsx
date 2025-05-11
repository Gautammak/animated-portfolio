import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

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

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
      I'm a dedicated backend developer with 1.5 years of experience specializing in Node.js and JavaScript. 
      I have hands-on expertise in building scalable and secure server-side applications using MongoDB, MySQL, and PostgreSQL, along with ORM tools like Sequelize.
      I'm also proficient with HTML, CSS, jQuery, Express js and EJS for creating dynamic and responsive web interfaces. I thrive in collaborative environments,
      quickly adapt to new challenges, and focus on delivering efficient backend solutions that power real-world applications.
      I’m well-versed in using tools like Postman for API testing, VS Code for development, and GitHub/Bitbucket for version control. 
      Let’s work together to turn your ideas into reliable, high-performing systems!
      </motion.p>
       
      <motion.div className="mt-8">
      <a href="https://drive.google.com/file/d/1ybN8XYQ0yHS2ugrpdiMGtFlTFRexkoIk/view?usp=drive_link" target="_blank"  rel="noopener noreferrer" className="inline-block bg-[#915EFF] text-white font-medium py-3 px-6 rounded-lg hover:bg-[#7a4fe4] transition duration-300">
        Check Resume
      </a>
    </motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
