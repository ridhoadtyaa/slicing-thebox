export default function CardProject({ img, name, address }) {
	return (
		<div className="w-fit overflow-hidden bg-blue-800 text-white 2xl:w-full">
			<img src={img} alt={name} width="100%" className="object-cover" />
			<div className="p-2">
				<p className="text-lg font-bold">{name}</p>
				<p className="text-md mt-2">{address}</p>
			</div>
		</div>
	);
}
