import { useState } from 'react';

const reasons = [
	{
		id: 1,
		name: 'Business',
	},
	{
		id: 2,
		name: 'Get to know',
	},
	{
		id: 3,
		name: 'Just wanna Have Fun',
	},
];

export default function SelectForm() {
	const [value, setValue] = useState('');
	const [active, setActive] = useState(false);

	const setValueHandler = name => {
		setValue(name);
		setActive(false);
	};

	return (
		<div className="relative w-full">
			<div className="rounded border border-slate-300 bg-white p-2">
				<div className="item-center flex justify-between text-slate-400" onClick={() => setActive(!active)}>
					<span className={`${value ? 'text-black' : "after:text-red-500 after:content-['*']"}`}>
						{value.length ? value : 'Reason for Contacting'}
					</span>
					<button type="button">
						{/* prettier-ignore */}
						<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className='w-5' preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g transform="translate(24 0) scale(-1 1)"><path fill="#2947a9" fillRule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1Zm-3.2 9a.809.809 0 0 0-.705.396a.71.71 0 0 0 .04.77l3.2 4.5A.815.815 0 0 0 12 16a.815.815 0 0 0 .666-.334l3.2-4.5a.71.71 0 0 0 .04-.77A.809.809 0 0 0 15.2 10H8.8Z" clipRule="evenodd" /></g></svg>
					</button>
				</div>
			</div>

			{active && (
				<div className="absolute -bottom-32 z-10 w-full border border-slate-300 bg-white">
					<ul>
						{reasons.map(reason => {
							return (
								<li
									className={`border-b border-slate-200 p-2 ${value === reason.name && 'bg-blue-400 text-white'} hover:bg-blue-400 hover:text-white`}
									key={reason.id}
									onClick={() => setValueHandler(reason.name)}
								>
									{reason.name}
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</div>
	);
}
