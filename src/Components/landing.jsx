import React from 'react';
import Profile from '../assets/profile_picture.png';
import { useTypewriter } from 'react-simple-typewriter';

const Landing = () => {
  const [typeEffect] = useTypewriter({
    words: [' a Geosptial Analyst', ' a Offshore Surveyor', ' a Data Processor', ' open to work!'],
    loop: 1,
    typeSpeed: 75,
    deleteSpeed: 40,
  });

  return (
    <div
      name="Home"
      className="gap-4% mt- absolute z-30 mx-36 grid h-[80%] grid-cols-2  outline-dotted max-lg:mx-10 max-md:mx-16 max-md:grid-cols-1"
    >
      <div className="grid-flow-row-2 grid h-fit rounded-md text-center outline-dotted outline-yellow-500 max-md:mt-0 max-md:h-40">
        <div className="flex h-28 items-end text-left text-6xl font-extrabold">I am:</div>
        <div className="flex h-28 bg-gradient-to-r from-third to-white bg-clip-text text-left text-6xl font-extrabold text-transparent outline-double outline-red-400 max-md:h-44">
          {typeEffect}
        </div>
        <p className="flex rounded-xl text-left font-bold text-white">
          Welcome to my digital space! I am a dynamic environmental scientist, geologist, and geospatial analyst
          committed to understanding and safeguarding our planet's precious ecosystems. With a background in offshore
          surveying, I have navigated diverse terrains, collecting and analyzing geospatial data to unravel the Earth's
          mysteries.
        </p>
        <p className="mt-5 text-left">
          My proficiency extends to data processing, where I transform intricate information into actionable insights.
          As a dedicated environmental scientist, I am driven by a passion for sustainable practices. Eager to
          contribute to impactful projects, I bring a blend of field expertise and analytical skills. Open to new
          opportunities, I am ready to collaborate and apply my diverse skill set to make a positive impact on our
          environment. Let's explore the possibilities together!
        </p>
      </div>
      <div className="row-span-2 h-[70%] rounded-md max-md:hidden">
        <img className="w-50 h-[100%] content-start outline-dotted max-md:hidden" src={Profile} alt="Hero" />
      </div>
    </div>
  );
};

export default Landing;
