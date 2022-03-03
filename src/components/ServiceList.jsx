import construction from '../assets/svg/construction.svg';
import renovation from '../assets/svg/renovation.svg';
import consultation from '../assets/svg/consultation.svg';
import repair from '../assets/svg/repair.svg';
import architecture from '../assets/svg/architecture.svg';
import electric from '../assets/svg/electric.svg';
import CardServices from './CardServices';

const list = [
	{
		id: 1,
		icon: construction,
		title: 'Construction',
	},
	{
		id: 2,
		icon: renovation,
		title: 'Renovation',
	},
	{
		id: 3,
		icon: consultation,
		title: 'Consultation',
	},
	{
		id: 4,
		icon: repair,
		title: 'Repair Services',
	},
	{
		id: 5,
		icon: architecture,
		title: 'Architecture',
	},
	{
		id: 6,
		icon: electric,
		title: 'Electric',
	},
];

export default function ServicesList() {
	return (
		<div className="mt-11 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-y-6 lg:mx-auto lg:w-9/12 lg:gap-x-14">
			{list.map(item => {
				return <CardServices title={item.title} icon={item.icon} id={item.id} key={item.id} />;
			})}
		</div>
	);
}
