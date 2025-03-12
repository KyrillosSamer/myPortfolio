import React from 'react';
// CountUp
import CountUp from 'react-countup';
// Intersection Observer Hook
import { useInView } from 'react-intersection-observer';
// Motion
import { motion } from 'framer-motion';
// Variant
import { fadeIn } from '../../variants';
import img from '../../assets/k.jpg';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section id="About" className="section" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-auto lg:h-screen px-4 sm:px-8">

          {/* Image - Hidden on mobile */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="hidden sm:block lg:w-1/3 xl:w-1/3"
          >
            <img
              src={img}
              alt="About Image"
              className="shadow-lg rounded-full border border-b-green-500 border-l-blue-400 border-r-red-500 w-full h-auto"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="w-full md:w-2/3 text-center md:text-left"
          >
            <h2 className="text-5xl font-bold text-accent">About Me</h2>
            <p className="text-xl text-gray-300 mt-4 leading-relaxed">
              👋 <strong>Hello! I'm Kyrillos Samer Mousa,</strong> a <strong className="text_p">Front-End Developer</strong> specializing in <strong>React.js</strong>.
              I focus on <strong>building modern, responsive, and high-performance web applications</strong>.<br />
              🚀 Additionally, I am a <strong className="text_p">Geo-Spatial Solutions Developer</strong>, leveraging <strong>PostgreSQL</strong> and <strong>GIS technologies</strong> to create
              <strong> interactive mapping applications</strong> that enable efficient spatial data analysis and visualization.
            </p>

            {/* Skills */}
            <div className="mt-4 text-xl text-gray-300 leading-relaxed">
              <p><strong>🌍 GIS Expertise:</strong> Developing spatial applications using <strong>PostgreSQL, Leaflet, and GeoServer</strong>.</p>
              <p><strong>💻 Front-End Development:</strong> Crafting dynamic web applications with <strong>React.js, JavaScript, and Tailwind CSS</strong>.</p>
              <p><strong>📊 Dashboard Development:</strong> Creating interactive dashboards with <strong className="text_p">M.App Enterprise</strong> and handling <strong>big data</strong> for large-scale spatial analysis.</p>
              <p><strong>🔗 API Integration:</strong> Connecting applications to various GIS and backend services.</p>
            </div>

            {/* Counters */}
            <div className="flex justify-center md:justify-start gap-10 mt-8">
              <div>
                <h3 className="text-4xl font-bold text_p">
                  {inView ? <CountUp start={0} end={2} duration={10} /> : 0}+
                </h3>
                <p className="text-xl text-gray-600">Years of Experience</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text_p">
                  {inView ? <CountUp start={0} end={20} duration={10} /> : 0}+
                </h3>
                <p className="text-xl text-gray-600">Projects Completed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
