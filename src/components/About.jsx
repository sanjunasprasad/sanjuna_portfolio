import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-12 md:mt-0">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-0">
          
          Hi there! I am skilled MERN Stack developer. 
          Experience in developing responsive web applications using react.js, redux, node.js, express.js, mongoDB,  JavaScript, firebase, HTML, CSS, RESTful Api etc.
          <br />
          <br />
          My experience encompasses building efficient, scalable, and user-friendly solutions tailored to solve real-world problems.
          <br />
          <br />
          I am a fast learner who collaborates closely with clients to transform their ideas into reality.  Let’s work together to bring your vision to life!
          <br />
          <br />
          I'm excited to explore new opportunities that will allow me to utilize my skills and contribute to meaningful projects.
        </p>

        
      </div>
    </div>
  );
};

export default About;
