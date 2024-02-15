import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
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
    <div className="relative z-40 flex h-20 w-screen items-center justify-between font-bold shadow-md ">
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
  );
};

export default NavBar;
