import CardProject from './CardProject';
import project1 from '../assets/img/project1.png';
import project2 from '../assets/img/project2.png';
import project3 from '../assets/img/project3.png';
import project4 from '../assets/img/project4.png';
import { useEffect, useState } from 'react';

const projects = [
	{
		id: 1,
		img: project1,
		name: 'Wildstone Infra Hotel',
		address: '2715 Ash Dr. San Jose, South Dakota',
	},
	{
		id: 2,
		img: project2,
		name: 'Wish Stone Building',
		address: '2972 Westheimer Rd. Santa Ana, Illinois',
	},
	{
		id: 3,
		img: project3,
		name: "Mr. Parkinston's House",
		address: '3517 W. Gray St. Utica, Pennsylvania',
	},
	{
		id: 4,
		img: project4,
		name: 'Oregano Height',
		address: '2464 Royal Ln. Mesa, New Jersey',
	},
];

export default function ProjectList() {
	const [limit, setLimit] = useState(4);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 640) {
				setLimit(1);
			} else if (window.innerWidth >= 640 && window.innerWidth < 1024) {
				setLimit(2);
			} else {
				setLimit(4);
			}
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [window.innerWidth]);

	return (
		<div className="grid grid-cols-1 gap-8 sm:max-w-none sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
			{projects.slice(0, limit).map(project => {
				return <CardProject key={project.id} {...project} />;
			})}
		</div>
	);
}
