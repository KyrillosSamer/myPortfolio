import React from 'react';
// Motion
import { motion } from 'framer-motion';
// Variants
import { fadeIn } from '../../variants';

const services = [
    {
        name: 'UI/UX Design',
        description: 'Creating modern, user-friendly, and accessible UI/UX designs.',
        details: 'Using Figma, Adobe XD, and user-centered design principles.',
        link: "Learn more"
    },
    {
        name: 'Development',
        description: 'Building high-performance web applications with React.js.',
        details: 'Specializing in responsive design and modern UI frameworks.',
        link: "Learn more"
    },
    {
        name: 'Geo-Spatial Solutions',
        description: 'Providing advanced GIS and spatial solutions.',
        details: 'Expertise in Leaflet, OpenLayers, and PostgreSQL for mapping.',
        link: "Learn more"
    },
    {
        name: 'Database Management',
        description: 'Efficiently handling and optimizing large datasets.',
        details: 'Experience with PostgreSQL, SQL Server, and spatial databases.',
        link: "Learn more"
    },
    {
        name: 'Dashboard Development',
        description: 'Creating interactive and insightful data dashboards.',
        details: 'Using M.App Enterprise and custom GIS visualizations.',
        link: "Learn more"
    },
    {
        name: 'API Integration',
        description: 'Seamlessly connecting applications with external APIs.',
        details: 'Experience with RESTful APIs, GraphQL, and third-party integrations.',
        link: "Learn more"
    }
];

const Services = () => {
    return (
        <section id="Services" className="py-16">
            <div className="container mx-auto px-4">
                {/* Title */}
                <motion.h2
                    variants={fadeIn('up', 0.3)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.5 }}
                    className="text-center text-5xl font-bold mb-6 text-accent"
                >
                    What I Do.
                </motion.h2>

                <motion.h3
                    variants={fadeIn('up', 0.3)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.5 }}
                    className="text-center text-2xl mb-16 text-white"
                >
                    I'm a Front-End Developer specializing in React.js and GIS applications.
                    I focus on building modern, responsive, and high-performance web applications.
                </motion.h3>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn('up', 0.3 + index * 0.2)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.5 }}
                            className="bg-white shadow-lg rounded-lg p-4 min-h-[200px] text-center hover:shadow-2xl transition-all duration-300"
                        >
                            <h3 className="text-lg font-semibold text-accent mb-2">
                                {service.name}
                            </h3>
                            <p className="text-gray-900 mb-2 text-sm">
                                {service.description}
                            </p>
                            <p className="text-gray-500 text-xs mb-3">
                                {service.details}
                            </p>
                            <button className="text_p mt-4">
                                {service.link}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
