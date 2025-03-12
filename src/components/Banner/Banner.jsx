import React from 'react';
// Image
import Image from "../../assets/kkk.jpg";
// Icons
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";

// Type animation
import { TypeAnimation } from 'react-type-animation';
// Motion
import { motion } from 'framer-motion';
// Variants
import { fadeIn } from '../../variants';

const Banner = () => {
  return (
    <section id='Home' className='section mt-[-100px]'>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text */}
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className="text-center md:text-left"
          >
            <h1 className="text-5xl font-bold">
              Kyrillos <span className="text-white">Samer</span>
            </h1>
            <div className="mt-4 text-[40px] lg:text-[60px] font-secondary font-semibold uppercase">
              <span className="text-xl font-medium mr-4">I am a </span>
              <TypeAnimation
                sequence={[
                  'Front-End Developer', 2000,
                  'Geo-Spatial Solution Developer', 2000
                ]}
                speed={50}
                repeat={Infinity}
                className="text-xl font-semibold text_p"
              />
            </div>

            <motion.p
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
              className="text-center md:text-left text-gray-700 text-lg leading-relaxed mt-6"
            >
              👋 <strong>Hello! I'm Kyrillos Samer Mousa,</strong> a <strong>Front-End Developer</strong> specializing in **React.js** and **Tailwind CSS**.
              I focus on **building modern, responsive, and high-performance web applications**.<br />
              🚀 Additionally, I am a **Geo-Spatial Solutions Developer**, leveraging **PostgreSQL** and **GIS technologies** to create **interactive mapping applications**
              that enable efficient spatial data analysis and visualization.
            </motion.p>

            <button className='btn btn-lg mt-5 text-xl'>Contact me</button>
            <a href="#" className='text-gradient text_p btn-link text-xl ml-2'>My portfolio</a>

            {/* Icons */}
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              <a href="https://github.com/KyrillosSamer" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} className="text-gray-700 hover:text-white transition" />
              </a>

              <a href="https://www.linkedin.com/in/kyrillos-samer-82b862263/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} className="text-blue-600 hover:text-blue-800 transition" />
              </a>

              <a href="https://wa.me/201275389201" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={30} className="text-green-500 hover:text-green-700 transition" />
              </a>

              <a href="mailto:kyrillossamer770@gmail.com" target="_blank" rel="noopener noreferrer">
                <BiLogoGmail size={30} className="text-red-500 hover:text-red-700 transition" />
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className="mt-10 md:mt-0"
          >
            <img src={Image} alt="Kyrillos Samer" className="img-responsive rounded-full w-[65%] md:w-[65%] 
            sm:w-[45%] mx-auto border-4 border-blue-500 shadow-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
