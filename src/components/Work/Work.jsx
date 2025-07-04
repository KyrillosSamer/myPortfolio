import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

//Import Images
import shoesAppImg from '../../assets/shoesApp.png';
import shopsyImg from '../../assets/shopsy.png';
import foodImg from '../../assets/food.png';
import filmImg from '../../assets/film.png';
import porImg from '../../assets/por.png';
import loginImg from '../../assets/login.png';
import baseImg from '../../assets/base.png';
import gisImg from '../../assets/gis.png';
import crudImg from '../../assets/crud.png';
import twasulImg from '../../assets/Twasul.png';
import gamesImg from '../../assets/games.png';
import madridImg from '../../assets/madrid.png';
import lo7aImg from '../../assets/lo7a.png';

const projects = [
  {
    image: shopsyImg,
    title: "Shopsy",
    description: "An online store for fashion lovers.",
    link: "https://kyrillossamer.github.io/Shopsy/",
    repo: "https://github.com/KyrillosSamer/Shopsy"
  },
  {
    image: twasulImg,
    title: "Tawasul",
    description: "Social media app built with Next.js and Redux Toolkit.",
    link: null,
    repo: "https://github.com/KyrillosSamer/Tawasul"
  },
  {
    image: foodImg,
    title: "Food Recipes",
    description: "Find and explore food recipes.",
    link: "https://kyrillossamer.github.io/FoodRecipes/",
    repo: "https://github.com/KyrillosSamer/FoodRecipes"
  },
  {
    image: filmImg,
    title: "Movies World",
    description: "A platform to search for movies.",
    link: "https://kyrillossamer.github.io/moviesWorld/",
    repo: "https://github.com/KyrillosSamer/moviesWorld"
  },
  {
    image: porImg,
    title: "Portfolio jQuery",
    description: "A portfolio website built using jQuery.",
    link: "https://kyrillossamer.github.io/portfolio/",
    repo: "https://github.com/KyrillosSamer/portfolio"
  },
  {
    image: loginImg,
    title: "Login & Register",
    description: "A simple authentication system.",
    link: "https://kyrillossamer.github.io/logIn-Register/#",
    repo: "https://github.com/KyrillosSamer/logIn-Register"
  },
  {
    image: baseImg,
    title: "WMS Layers Viewer",
    description: "An application displaying WMS layers on a map.",
    link: "https://kyrillossamer.github.io/WmsLayers/",
    repo: "https://github.com/KyrillosSamer/WmsLayers"
  },
  {
    image: gisImg,
    title: "GIS Tools",
    description: "Geospatial analysis tools & data visualization.",
    link: "https://kyrillossamer.github.io/GisTools/",
    repo: "https://github.com/KyrillosSamer/GisTools"
  },
  {
    image: crudImg,
    title: "CRUD App",
    description: "Basic CRUD operations app.",
    link: "https://kyrillossamer.github.io/CRUD/",
    repo: "https://github.com/KyrillosSamer/CRUD"
  },
  {
    image: shoesAppImg,
    title: "Shoes App",
    description: "A sleek e-commerce app for stylish shoes.",
    link: "https://kyrillossamer.github.io/ShoesApp/",
    repo: "https://github.com/KyrillosSamer/ShoesApp"
  },
  {
    image: gamesImg,
    title: "Trendy Games",
    description: "Gaming showcase using Tailwind.",
    link: "https://kyrillossamer.github.io/TrendyGames/",
    repo: "https://github.com/KyrillosSamer/TrendyGames"
  },
  {
    image: madridImg,
    title: "Football Players",
    description: "Real Madrid players with animations.",
    link: "https://kyrillossamer.github.io/FootBallPlayers/",
    repo: "https://github.com/KyrillosSamer/FootBallPlayers"
  },
  {
    image: lo7aImg,
    title: "Artistic Gallery",
    description: "Online art marketplace.",
    link: "https://kyrillossamer.github.io/ArtisticGallery/",
    repo: "https://github.com/KyrillosSamer/ArtisticGallery"
  }
];

const Work = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true
    });
  }, []);

  return (
    <section id='Work' className='py-16 px-5'>
      <div className='container mx-auto'>
        <h2 data-aos="fade-up" className='text-gradient text_p text-5xl font-bold text-center mb-10'>
          My Work
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className='relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-all duration-300'
            >
              <img src={project.image} alt={project.title} className='w-full h-auto' />
              <div className='absolute inset-0 bg-black/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 text-white text-center'>
                <h3 className='mt-2 text-2xl font-bold text-accent'>{project.title}</h3>
                <p className='mt-2 text-lg'>{project.description}</p>
                {project.link && (
                  <a href={project.link} target='_blank' rel='noopener noreferrer' className='btn btn-lg mt-5 text-xl w-[60%]'>
                    View Project
                  </a>
                )}
                <a href={project.repo} target='_blank' rel='noopener noreferrer' className='mt-2 text-gradient text_p btn-link text-xl underline'>
                  GitHub Repo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
