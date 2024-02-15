import React from 'react';
import Profile from '../assets/profile_picture.png';
import { BiSolidRightArrow } from 'react-icons/bi';
import { useTypewriter } from 'react-simple-typewriter';

const Landing = () => {
  const [typeEffect] = useTypewriter({
    words: [' a Geosptial Analyst.', ' a Offshore Surveyor.', ' a Data Processor.', ' Open to work!'],
    loop: 1,
    typeSpeed: 75,
    deleteSpeed: 40,
  });

  return (
    <div name="Home" className="gap-4% absolute z-30 mx-36 mt-10 grid h-[80%] grid-cols-2">
      <div className="grid-flow-row-2 mt-10 grid h-fit rounded-md text-center outline-yellow-500">
        <div className="flex h-28 items-end text-left text-6xl font-extrabold">I am:</div>
        <div className="flex h-28 bg-gradient-to-r from-third to-white bg-clip-text text-left text-6xl font-extrabold text-transparent max-md:h-44">
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
        <div className="out mt-10 flex w-full justify-center">
          <button
            to="Portfolio"
            smooth
            duration={500}
            className="group my-2 flex w-fit items-center rounded bg-gradient-to-r from-third to-first px-6 py-3 text-white
            duration-300 hover:scale-110"
          >
            {' '}
            Portfolio
            <span className=" duration-300 group-hover:rotate-90">
              <BiSolidRightArrow className="ml-1 " />
            </span>
          </button>
        </div>
      </div>
      <div className="row-span-2 h-[70%] rounded-md max-md:hidden">
        <img className="w-50 h-[100%] max-md:hidden" src={Profile} alt="Hero" />
      </div>
    </div>
  );
};

export default Landing;
