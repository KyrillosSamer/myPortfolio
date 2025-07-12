import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
    {
        name: "UI/UX Design",
        description: "Creating modern, user-friendly, and accessible UI/UX designs.",
        details: "Using Figma, Adobe XD, and user-centered design principles.",
        link: "Learn more",
    },
    {
        name: "Development",
        description: "Building high-performance web applications with React.js.",
        details: "Specializing in responsive design and modern UI frameworks.",
        link: "Learn more",
    },
    {
        name: "Geo-Spatial Solutions",
        description: "Providing advanced GIS and spatial solutions.",
        details: "Expertise in Leaflet, OpenLayers, and PostgreSQL for mapping.",
        link: "Learn more",
    },
    {
        name: "Database Management",
        description: "Efficiently handling and optimizing large datasets.",
        details: "Experience with PostgreSQL, SQL Server, and spatial databases.",
        link: "Learn more",
    },
    {
        name: "Dashboard Development",
        description: "Creating interactive and insightful data dashboards.",
        details: "Using M.App Enterprise and custom GIS visualizations.",
        link: "Learn more",
    },
    {
        name: "API Integration",
        description: "Seamlessly connecting applications with external APIs.",
        details: "Experience with RESTful APIs, GraphQL, and third-party integrations.",
        link: "Learn more",
    },
];

const Services = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 100,
            once: true,
        });
    }, []);

    return (
        <section id="Services" className="py-16">
            <div className="container mx-auto px-4">
                {/* Title */}
                <h2 data-aos="fade-up" className="text-center text-5xl font-bold  text_p">
                    What I Do.
                </h2>

                <h3 data-aos="fade-up" className="text-center text-2xl mb-16 text-white">
                    I'm a Front-End Developer specializing in React.js and GIS applications.
                    I focus on building modern, responsive, and high-performance web applications.
                </h3>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 200} // تأخير الحركة لكل عنصر
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
                            <button className="text_p mt-4">{service.link}</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
