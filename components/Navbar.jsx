import React from 'react';
import Link from 'next/link';

const Navbar = () => {
	return (
		<div>
			<nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
				<div className="flex items-center flex-shrink-0 text-white mr-6">
					<span className="font-semibold text-xl tracking-tight">
						Tailwind CSS
					</span>
				</div>
				<div>
					<Link href="/">
						<a className="inline-block text-sm px-4 py-2 mr-5 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
							Home
						</a>
					</Link>
					<Link href="/contact">
						<a className="inline-block text-sm px-4 py-2 mr-5 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
							Contact
						</a>
					</Link>
					<Link href="/about">
						<a className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
							About
						</a>
					</Link>
				</div>
				<div className="block lg:hidden">
					<button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
						<svg
							className="fill-current h-3 w-3"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>Menu</title>
							<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
						</svg>
					</button>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
