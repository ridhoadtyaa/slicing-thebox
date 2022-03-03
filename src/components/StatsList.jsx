import illus1 from '../assets/img/illus1.png';
import illus2 from '../assets/img/illus2.png';
import illus3 from '../assets/img/illus3.png';
import illus4 from '../assets/img/illus4.png';
import CardStats from './CardStats';

const stats = [
	{
		title: 'Happy Clients',
		count: 84,
		icon: illus1,
		iconPosition: '-top-5 -right-6',
		cardPosition: 'sm:z-10 sm:-bottom-14 sm:-right-32',
	},
	{
		title: 'Projects Completed',
		count: 123,
		icon: illus2,
		iconPosition: '-top-8 -left-7',
		cardPosition: 'sm:right-20',
	},
	{
		title: 'Awards Win',
		count: 37,
		icon: illus3,
		iconPosition: '-top-5 -right-6',
		cardPosition: 'sm:z-10 sm:bottom-6 sm:-right-24',
	},
	{
		title: 'Years in business',
		count: 30,
		icon: illus4,
		iconPosition: '-bottom-5 -right-6',
		cardPosition: 'sm:right-10 sm:-top-20',
	},
];

export default function StatsList() {
	return (
		<div className="space-y-6 sm:space-y-0 lg:w-8/12">
			{stats.map(stat => {
				return <CardStats {...stat} key={stat.title} />;
			})}
		</div>
	);
}
