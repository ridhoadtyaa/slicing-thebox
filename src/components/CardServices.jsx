export default function CardServices({ icon, title, id }) {
	return (
		<div className={`flex flex-col items-center justify-center rounded-md  p-6 shadow ${id % 2 === 0 ? 'bg-blue-800' : 'bg-white'}`}>
			<img src={icon} alt={title} />
			<div className={`mt-4 h-[2px] w-14 ${id % 2 === 0 ? 'bg-white' : 'bg-slate-300'}`} />
			<p className={`mt-4 text-center text-base font-semibold ${id % 2 === 0 ? 'text-white' : 'text-blue-800'}`}>{title}</p>
		</div>
	);
}
