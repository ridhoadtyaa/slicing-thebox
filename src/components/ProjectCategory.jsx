import { useState } from 'react';

const categories = ['All', 'Commercial', 'Residential', 'Other'];

export default function ProjetCategory() {
	const [active, setActive] = useState('All');

	return (
		<div className="mt-10 flex items-center justify-evenly lg:mt-0 lg:block lg:w-4/12 lg:space-y-2">
			{categories.map(category => {
				return (
					<button
						className={`lg:block lg:pl-3 xl:text-2xl ${
							active === category
								? 'border-b-2 border-blue-800 font-bold text-blue-800 lg:border-l-4 lg:border-b-0'
								: 'font-medium text-slate-300 hover:text-slate-400'
						}`}
						onClick={() => setActive(category)}
						key={category}
					>
						{category}
					</button>
				);
			})}
		</div>
	);
}
