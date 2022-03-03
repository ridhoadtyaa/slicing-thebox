import { useState } from 'react';

export default function InputForm({ placeholder, type, required, name }) {
	const [value, setValue] = useState('');
	return (
		<div className="relative w-full">
			<input
				type={type}
				name={name}
				className="peer block w-full rounded border border-slate-300 bg-white p-2 placeholder:text-slate-400 focus:outline-slate-500"
				value={value}
				onChange={e => setValue(e.target.value)}
				required={required}
			/>
			<label
				htmlFor={name}
				className={`${value.length ? 'invisible' : 'visible'} absolute top-2 left-2 text-slate-400 ${
					required ? "after:text-red-500 after:content-['*']" : ''
				}`}
			>
				{placeholder}
			</label>
		</div>
	);
}
