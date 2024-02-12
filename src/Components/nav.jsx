import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
	const [nav, setNav] = useState(false);

	const tab = [
		{
			id: 1,
			link: "Welcome!",
			path: "/Home",
		},
		{
			id: 6,
			link: "test2",
			path: "/test2",
		},
		{
			id: 7,
			link: "test1",
			path: "/test1",
		},
	];

	return (
		<div className="relative z-20 flex h-20 w-full items-center justify-between uppercase shadow-md">
			<div className="ml-32 flex text-6xl">
				<p className="mt-1">S</p>
				<p className="mb-1">&</p>
				<p className="mt-1">B</p>
			</div>

			<ul className="text-md absolute right-24 flex items-center justify-center font-Montserrat font-light max-xl:hidden">
				{tab.map(({ id, link, path, metas }) => (
					<li key={id} className="px-5 hover:underline">
						<a href={path}>{link}</a>
						<meta name={metas} content=""></meta>
					</li>
				))}
			</ul>
			<div
				onClick={() => setNav(!nav)}
				className="z-40 cursor-pointer pr-5 xl:hidden"
			>
				{nav ? <FaTimes size={25} /> : <FaBars size={25} />}
			</div>
			{nav && (
				<ul className="fixed right-0 top-0 flex h-screen w-1/3 flex-col items-center justify-center rounded bg-green-200 bg-opacity-50 xl:hidden">
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
