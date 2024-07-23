import React from "react";
import allsilks from "../assets/portfolio/allsilks.png";
import bb1 from "../assets/portfolio/bb1.png";
import olx from "../assets/portfolio/olx.png";
import connectify from "../assets/portfolio/connectify.png";
import netflix from "../assets/portfolio/netflix.png";
import weather from "../assets/portfolio/weatherapp.png";
import git from "../assets/portfolio/giticon.png"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      name: "Connectify",
      src: connectify,
      githubsrc: "https://github.com/sanjunasprasad/connectify_backend",
      description: "Social media app offering seamless chat, video calls, post sharing, likes, comments, custom user profiles. Enjoy intuitive features, all in one engaging platform. "
    },
    {
      id: 2,
      name: "Ecommerce",
      src: allsilks,
      githubsrc: "https://github.com/sanjunasprasad/ecommerce_site",
      description: "Developed an intuitive eCommerce website with secure login, seamless product search, and efficient order placement for an enhanced online shopping experience."
    },
    {
      id: 3,
      name: "Netflix Clone",
      src: netflix,
      githubsrc: "https://github.com/sanjunasprasad/react_netflix_clone",
      description: "Netflix clone in React: A responsive web app mimicking Netflix's UI with features like user authentication, dynamic content fetching, and media playback."
    },
    {
      id: 4,
      name: "Olx Clone",
      src: olx,
      githubsrc: "https://github.com/sanjunasprasad/react_olx_clone",
      description: "A web application replicating OLX's functionality for buying and selling products, featuring user registration, listings, search along with a responsive design for optimal usability"
    },
    {
      id: 5,
      name: "Weather App",
      src: weather,
      githubsrc: "https://github.com/sanjunasprasad/react_weatherapp",
      description: "Provides real-time weather updates based on user location or search, with interactive UI elements and forecast information such as temperature, humidity, wind speed."
    },
    {
      id: 6,
      name: "Cafe FinderApp",
      src: bb1,
      githubsrc: "https://github.com/sanjunasprasad/BrewBuddy_cafeFinderApp",
      description: "Locate coffee shops by categories, names, and ratings. Includes Razorpay for purchases, plus intuitive search, sorting options, and customizable filters for a personalized experience."
    },
    {
      id: 7,
      name: "Task Manager App",
      src: bb1,
      githubsrc: "https://github.com/sanjunasprasad/TaskManager_frontend",
      description: "This task management app features task creation, updating, and drag-and-drop functionality. It includes email/Google authentication, server-side validation, and robust UI/backend."
    },
  ];

  return (
    <div name="projects" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Projects
          </p>
          <p className="py-6 text-xl">Checkout my projects here along with links to code repositories and live demos in it.</p>
        </div>

        <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
          {portfolios.map(({ id, src, name, description, demolink, githubsrc }) => (
            <div key={id} className="rounded-md border">
              <img
                src={src}
                alt=""
                className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
              />
              <div className="p-4">
                <div className="flex items-center">
                  <h1 className="text-lg font-semibold">{name}</h1>
                  <a href={githubsrc} className="ml-2">
                    <img src={git} alt="GitHub" className="w-5 h-5" />
                  </a>
                </div>
                <p className="mt-3 text-sm text-gray-600">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default Portfolio;
