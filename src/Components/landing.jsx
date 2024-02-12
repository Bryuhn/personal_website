import React from 'react';
import Profile from '../assets/profile_picture.png';
import { useTypewriter } from 'react-simple-typewriter';

const Landing = () => {
  const [typeEffect] = useTypewriter({
    words: [' a Developer', ' a Data Analyst', ' a Enviromental Scientist', ' open to work!'],
    loop: 1,
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <div name="Home" className="mx-24 mt-24 grid grid-cols-2 gap-4">
      <div className="grid-flow-row-2 grid h-56 rounded-md text-center">
        <div className="flex h-28 items-center justify-center">I am a:</div>
        <div className="flex h-28 items-center justify-center">{typeEffect}</div>
      </div>
      <div className="h-116 row-span-2 rounded-md ">
        <img className="h-full w-full object-contain" src={Profile} alt="Hero" />
      </div>
      <div className="">
        <span className=" text center flex h-56 items-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet arcu eu augue fringilla porttitor a
          id orci. Morbi euismod cursus faucibus. Nulla at libero vitae felis euismod dictum sed a massa. Aenean porta
          risus lorem, id congue arcu porta a. Aliquam at augue et metus placerat fermentum. Nullam sit amet interdum
          felis, eu tempor lorem.
        </span>
      </div>
    </div>
  );
};

export default Landing;
