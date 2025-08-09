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
    <section id='Home' className='section mt-[-100px] mb-36'>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">

          {/* Text Section */}
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className="text-center md:text-left"
          >
<h1 className="text-4xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold mt-[26%] sm:mt-10">
  Kyrillos <span className="text-white">Samer</span>
</h1>


            <div className="mt-4 text-[22px] sm:text-[25px] lg:text-[30px] xl:text-[30px] font-secondary font-semibold uppercase">
              <span className="text-lg sm:text-sm lg:text-xl xl:text-xl font-medium mr-2">I am a </span>
              <TypeAnimation
  sequence={['Front-End Developer', 2000, 'GIS Solutions Developer', 2000]}
  speed={50}
  repeat={Infinity}
  className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text_p whitespace-nowrap"
/>

            </div>

<motion.p
  variants={fadeIn('up', 0.3)}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.5 }}
  className="text-center md:text-left text-gray-300 text-sm sm:text-[16px] md:text-[13px] lg:text-[15px] xl:text-[16px] leading-relaxed mt-4 xl:max-w-[75%] w-full"
>
  🚀 I’m a <strong className="text_p">results-driven Front-End Developer</strong> skilled in <strong>React.js</strong>, <strong>Next.js</strong>, and modern UI frameworks like <strong>Tailwind CSS</strong> and <strong>Bootstrap</strong>. I build performant, responsive, and accessible apps with clean, scalable code.
  <br /><br />
  🌍 As a <strong className="text_p">Geo-Spatial Solutions Developer</strong>, I work with <strong>PostgreSQL</strong>, <strong>PostGIS</strong>, <strong>GeoServer</strong>, <strong>Leaflet</strong>, and <strong>OpenLayers</strong> to deliver interactive mapping apps for smart spatial analysis.
  <br /><br />
  🧠 I have strong problem-solving skills with deep knowledge in <strong>JavaScript</strong>, <strong>TypeScript</strong>, <strong>C++</strong>, <strong>Data Structures</strong>, and <strong>Design Patterns</strong>, focused on maintainability and UX precision.
</motion.p>





{/* 
            {/* Buttons */}
            <div className="hidden sm:hidden md:flex items-center gap-4 mt-3">
              <a href="#" className='text-gradient text_p btn-link text-xl sm:text-lg lg:text-2xl xl:text-3xl'>
                Contact me
              </a>
            </div> 


            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              <a href="https://github.com/KyrillosSamer" target="_blank" rel="noopener noreferrer">
                <FaGithub size={35} className="text-gray-700 hover:text-white transition" />
              </a>
              <a href="https://www.linkedin.com/in/kyrillos-samer-82b862263/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={35} className="text-blue-600 hover:text-blue-800 transition" />
              </a>
              <a href="https://wa.me/201275389201" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={35} className="text-green-500 hover:text-green-700 transition" />
              </a>
              <a href="mailto:kyrillossamer770@gmail.com" target="_blank" rel="noopener noreferrer">
                <BiLogoGmail size={35} className="text-red-500 hover:text-red-700 transition" />
              </a>
            </div>
          </motion.div>

          {/* Image Section */}
<motion.div
  variants={fadeIn('down', 0.5)}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.5 }}
  className="mt-10 md:mt-0 hidden sm:block"
>
  <div className="mx-auto md:max-w-[1500px]"> 
    <img
      src={Image}
      alt="Kyrillos Samer"
      className="
        rounded-full
        w-[180px]
        sm:w-[200px]
        md:w-[650px]  
        lg:w-[1000px]
        xl:w-[750px]
        mx-auto
        border-4
        border-blue-500
        shadow-2xl
        object-cover
        block
      "
    />
  </div>
</motion.div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
