import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Social = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: 'https://www.linkedin.com/in/brian-keane-814787174/',
      style: 'rounded-tr-md',
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/Bryuhn',
    },
    {
      id: 3,
      child: (
        <>
          E-mail <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:Bryuhn@gmail.com',
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: '/Brian Keane.pdf',
      style: 'rounded-br-md',
      download: true,
    },
  ];
  return (
    <div className="fixed left-0 top-[35%] z-40 hidden flex-col lg:flex">
      <ul>
        {links.map(({ id, child, href, download }) => (
          <li
            key={id}
            className="hover:rouned-md duraction-300 ml-[-100px] flex h-14 w-40 items-center justify-between px-4 duration-300 hover:ml-[-10px]"
          >
            <a
              href={href}
              className="delay-80 flex w-full items-center justify-between text-third transition-colors ease-in-out hover:text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
