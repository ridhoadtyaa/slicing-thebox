import { useState } from 'react';
import logo from '../assets/img/logo.png';
import NavItem from './NavItem';

const navItems = [
	{
		name: 'Home',
		link: '/#',
	},
	{
		name: 'About Us',
		link: '/#about',
	},
	{
		name: 'Projects',
		link: '/#projects',
	},
	{
		name: 'Services',
		link: '/#services',
	},
	{
		name: 'Contact Us',
		link: '/#contact',
	},
];

export default function Navbar() {
	const [navMobile, setNavMobile] = useState(false);
	const [active, setActive] = useState('Home');

	const activeNavItem = name => {
		setActive(name);
		setNavMobile(false);
	};

	return (
		<nav className="fixed z-20 w-full bg-white py-4">
			<div className="container mx-auto flex items-center justify-between">
				<a href="/#" className="flex items-center">
					<img src={logo} alt="Logo" className="w-7 lg:w-8" />
					<div className="ml-3 text-2xl font-bold text-blue-800 lg:text-3xl">
						<span className="italic">The</span>Box
					</div>
				</a>
				<div>
					<button onClick={() => setNavMobile(!navMobile)} className="md:hidden">
						{/* prettier-ignore */}
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>
					<button
						className={`fixed top-4 right-5 z-30 ${navMobile ? 'block' : 'hidden'} transition-all duration-300 md:hidden`}
						onClick={() => setNavMobile(false)}
					>
						{/* prettier-ignore */}
						<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
					<ul
						className={`fixed flex min-h-screen flex-col items-center justify-evenly bg-blue-800 font-medium text-white transition-all duration-300 md:static md:min-h-0 md:flex-row md:space-x-6 md:bg-white lg:space-x-8 ${
							navMobile ? 'inset-0' : '-right-full top-0 bottom-0'
						}`}
					>
						{navItems.map(item => {
							return (
								<NavItem href={item.link} active={active === item.name} onClick={() => activeNavItem(item.name)} key={item.name}>
									{item.name}
								</NavItem>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
}
