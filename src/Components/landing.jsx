import React from 'react';
import Profile from '../assets/profile_picture.png';
import { useTypewriter } from 'react-simple-typewriter';

const Landing = () => {
  const [typeEffect] = useTypewriter({
    words: [
      ' a Geosptial Analyst',
      ' a Offshore Surveyor',
      ' a Data Processor',
      ' a Enviromental Scientist',
      ' open to work!',
    ],
    loop: 1,
    typeSpeed: 75,
    deleteSpeed: 40,
  });

  return (
    <div name="Home" className="mx-24 mt-24 grid grid-cols-2 gap-4">
      <div className="grid-flow-row-2 grid h-56 rounded-md text-center">
        <div className="flex h-28 items-center justify-center text-6xl">I am </div>
        <div className="flex h-28 items-center justify-center text-6xl">{typeEffect}</div>
      </div>
      <div className="h-160 row-span-2 rounded-md bg-green-400 ">
        <img className="h-full w-full object-contain" src={Profile} alt="Hero" />
      </div>
      <div className="">
        <span className=" text center flex h-56 items-center bg-black">
          Welcome to my digital space! I am a dynamic environmental scientist, geologist, and geospatial analyst
          committed to understanding and safeguarding our planet's precious ecosystems. With a background in offshore
          surveying, I have navigated diverse terrains, collecting and analyzing geospatial data to unravel the Earth's
          mysteries. My proficiency extends to data processing, where I transform intricate information into actionable
          insights. As a dedicated environmental scientist, I am driven by a passion for sustainable practices. Eager to
          contribute to impactful projects, I bring a blend of field expertise and analytical skills. Open to new
          opportunities, I am ready to collaborate and apply my diverse skill set to make a positive impact on our
          environment. Let's explore the possibilities together!
        </span>
      </div>
    </div>
  );
};

export default Landing;
