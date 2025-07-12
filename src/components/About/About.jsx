import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from '../../assets/k.jpg';
import {
  FaMapMarkedAlt,
  FaReact,
  FaChartBar,
  FaGlobe,
  FaDatabase,
  FaServer,
} from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section id="About" className="section pt-20  sm:mt-10 xl:pt-12" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 px-4 sm:px-8  mb-40">

          {/* Image */}
          <div data-aos="fade-left" className="hidden sm:block lg:w-1/3 xl:w-1/3">
            <img
              src={img}
              alt="About Image"
              className="shadow-lg rounded-full border border-b-green-500 border-l-blue-400 border-r-red-500 w-full h-auto"
            />
          </div>

          {/* Text Content */}
          <div data-aos="fade-right" className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-4xl sm:text-3xl md:text-5xl font-bold text_p mt-[10%] ">About Me</h2>

            <p className="text-xs sm:text-sm md:text-lg text-gray-300 mt-4 leading-snug sm:leading-relaxed">
              👋 <strong>Hello! I'm Kyrillos Samer Mousa,</strong> a <strong className="text_p">Front-End Developer</strong> specializing in <strong>React.js</strong> and <strong>GIS Solutions</strong>.
              I create modern web applications and interactive maps.
            </p>

            {/* Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2 text-gray-300">
              <div className="flex items-center gap-3" data-aos="fade-up">
                <FaReact className="text-blue-400 text-xl sm:text-2xl" />
                <p className="text-xs sm:text-sm">
                  Front-End: React.js, Next.js, Redux, JavaScript, TypeScript, SCSS, Tailwind CSS, HTML, Bootstrap.
                </p>
              </div>

              <div className="flex items-center gap-3" data-aos="fade-up">
                <FaMapMarkedAlt className="text-green-400 text-xl sm:text-2xl" />
                <p className="text-xs sm:text-sm">
                  GIS Development: Leaflet, OpenLayers, GeoServer
                </p>
              </div>

              <div className="flex items-center gap-3" data-aos="fade-up">
                <FaChartBar className="text-yellow-400 text-xl sm:text-2xl" />
                <p className="text-xs sm:text-sm">
                  M.App Enterprise: Application Development, Dashboarding, Big Data
                </p>
              </div>

              <div className="flex items-center gap-3" data-aos="fade-up">
                <FaGlobe className="text-red-400 text-xl sm:text-2xl" />
                <p className="text-xs sm:text-sm">
                  GIS & RS Tools: ArcGIS, ArcGIS Pro, ArcGIS Online, QGIS, GeoMedia, ERDAS, ENVI
                </p>
              </div>

              <div className="flex items-center gap-3" data-aos="fade-up">
                <FaDatabase className="text-purple-400 text-xl sm:text-2xl" />
                <p className="text-xs sm:text-sm">
                  Databases: PostgreSQL, SQL Server
                </p>
              </div>

              <div className="flex items-center gap-3" data-aos="fade-up">
                <FaServer className="text-orange-400 text-xl sm:text-2xl" />
                <p className="text-xs sm:text-sm">
                  Backend: Node.js, Express.js
                </p>
              </div>

              <div className="flex items-center gap-3" data-aos="fade-up">
                <FaServer className="text-cyan-400 text-xl sm:text-2xl" />
                <p className="text-xs sm:text-sm">
                  Programming: JavaScript, TypeScript, C++, Python, OOP, Data Structures, Design Patterns
                </p>
              </div>
            </div>

            {/* Counters */}
            <div className="flex justify-center md:justify-start gap-10 mt-8" data-aos="zoom-in">
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold text_p">
                  {inView ? <CountUp start={0} end={2} duration={5} /> : 0}+
                </h3>
                <p className="text-xs sm:text-lg text-gray-600">Years of Experience</p>
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold text_p">
                  {inView ? <CountUp start={0} end={20} duration={5} /> : 0}+
                </h3>
                <p className="text-xs sm:text-lg text-gray-600">Projects Completed</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
