export default function CardReputation({ icon, title, description }) {
	return (
		<div className="flex flex-col rounded border border-slate-300 p-3 text-center sm:text-left">
			{/* prettier-ignore */}
			<svg width={40} height={40} viewBox="0 0 40 40" className="mx-auto sm:mx-0" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={icon} fill="#F9995D" />
            </svg>
			<p className="mt-4 text-lg font-bold">{title}</p>
			<p className="mt-3 text-sm text-slate-400">{description}</p>
		</div>
	);
}
