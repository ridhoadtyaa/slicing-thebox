export default function CardStats({ icon, count, title, iconPosition, cardPosition }) {
	return (
		<div className={`relative mx-auto w-11/12 bg-white sm:max-w-xs ${cardPosition}`}>
			<div className="p-8 shadow-lg">
				<h1 className="text-5xl font-semibold">{count}</h1>
				<div className="mt-3 ml-3 border-l-8 border-orange-400 pl-3">
					<p className="text-xl text-[#667299]">{title}</p>
				</div>
			</div>
			<img src={icon} alt={title} className={`absolute ${iconPosition}`} />
		</div>
	);
}
