import React from "react";
import google from "../assets/portfolio/google.png";
import todo from "../assets/portfolio/todo.png";
import ecommerce from "../assets/portfolio/ecommerce.png";
import firebase_chatapp from "../assets/portfolio/firebase_chatapp.png";
import calculator from "../assets/portfolio/calculator.png";
import weather from "../assets/portfolio/weather.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: firebase_chatapp,
      demolink: "https://firebase-chat-application-nine.vercel.app/",
      githubsrc: "https://github.com/Manoj-Chowdhury/firebase-chat-application"
    },
    {
      id: 2,
      src: google,
      demolink: "https://personal-google-search-app-clone.netlify.app/",
      githubsrc: "https://github.com/Manoj-Chowdhury/google-search-clone"
    },
    {
      id: 3,
      src: ecommerce,
      demolink: "#",
      githubsrc: "https://github.com/Manoj-Chowdhury/strapi_ecommerce_app_frontend"
    },
    {
      id: 4,
      src: calculator,
      demolink: "https://cal-cul.netlify.app/",
      githubsrc: "https://github.com/Manoj-Chowdhury/calculator/tree/master"
    },
    {
      id: 5,
      src: weather,
      demolink: "https://weathermc-app.netlify.app/",
      githubsrc: "https://github.com/Manoj-Chowdhury/weather-app"
    },
    {
      id: 6,
      src: todo,
      demolink: "https://app-todom.netlify.app/",
      githubsrc: "https://github.com/Manoj-Chowdhury/todo"
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
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="rounded-md border">
          <img
            src="https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwxMTM4MTU1NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Laptop"
            className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
          />
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">Nike Airmax v2</h1>
            <p className="mt-3 text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
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
