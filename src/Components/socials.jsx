import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

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
  ]
  return (
    <div className="bg-black fixed left-0 top-[35%] hidden flex-col hover:bg-fourth lg:flex">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              'hover:rouned-md duraction-300 bg-gray-500 ml-[-100px] flex h-14 w-40 items-center justify-between px-4 duration-300 hover:ml-[-10px]' +
              style
            }
          >
            <a
              href={href}
              className="text-white flex w-full items-center justify-between"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
      <div className=" text-bg-green-20 text-xxl max-h-full text-ellipsis bg-first  text-second"></div>
    </div>
  )
}

export default Social
