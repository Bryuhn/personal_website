import { Routes, Route } from 'react-router-dom';
import Landing from './Components/landing';
import Contact from './Components/contact';
import Personal from './Components/personal';
import Experience from './Components/experience';
import Profile from './Components/profile';
import Social from './Components/socials';
import Portfolio from './Components/portfolio';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Welcome() {
  const [nav, setNav] = useState(false);

  const tab = [
    {
      id: 1,
      link: 'Home',
      path: '/Home',
    },
    {
      id: 2,
      link: 'Profile',
      path: '/Profile',
    },
    {
      id: 3,
      link: 'Experience',
      path: '/Experience',
    },
    {
      id: 4,
      link: 'Portfolio',
      path: '/Portfolio',
    },
    {
      id: 5,
      link: 'Personal',
      path: '/Personal',
    },
    {
      id: 6,
      link: 'Contact',
      path: '/Contact',
    },
  ];

  return (
    <div className="absolute min-h-screen w-full bg-gradient-to-t from-fifth to-fourth">
      <div className="relative z-40 flex h-20 items-center justify-between font-bold shadow-md ">
        <div className="flex text-6xl ">
          <p className="ml-36">Brian Brousse</p>
        </div>
        <ul className="text-md absolute right-6 flex items-center justify-center font-bold  max-xl:hidden">
          {tab.map(({ id, link, path, metas }) => (
            <li key={id} className="px-5 text-xl hover:text-white hover:underline">
              <a href={path}>{link}</a>
              <meta name={metas} content=""></meta>
            </li>
          ))}
        </ul>
        <div onClick={() => setNav(!nav)} className="z-40 mr-5 cursor-pointer hover:text-white xl:hidden">
          {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
        {nav && (
          <ul className="fixed right-0 top-0 flex w-40 flex-col justify-center rounded-l bg-fourth text-left opacity-90 xl:hidden">
            {tab.map(({ id, link, path }) => (
              <li
                key={link.id}
                className="cursor-pointer py-6 ps-4 text-2xl font-bold capitalize duration-500 hover:scale-110 hover:text-white"
              >
                <li onClick={() => setNav(!nav)}>
                  <a href={path}>{link}</a>
                </li>
              </li>
            ))}
          </ul>
        )}
      </div>
      <footer className="absolute bottom-0 z-10 w-full">
        <div className="custom-shape-divider-bottom-1707829146">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="col-span-1 mb-5 grid justify-center text-center text-white max-lg:h-full">
          <div className="z-20">Brian Brousse</div>
          <div className="z-20 mb-3 text-xs">All rights reserved</div>
        </div>
      </footer>
      {/* <Base /> */}
      <Social />
      <Routes>
        <Route path="" element={<Landing />} />
        <Route path="/Home" element={<Landing />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Personal" element={<Personal />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Welcome;
