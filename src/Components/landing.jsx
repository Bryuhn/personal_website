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
    <div name="Home" className="outline-green-400 mx-40 mt-36 grid grid-cols-2 gap-4">
      <div className="bg-red-300 h-24 rounded-md text-center">I am a </div>
      <div className="bg-red-200 h-56 rounded-md text-center">01</div>
      <div className="bg-red-100 col-span-2 rounded-md">
        <span className="text center outline-purple-300 h-24 align-middle outline-dotted">
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
