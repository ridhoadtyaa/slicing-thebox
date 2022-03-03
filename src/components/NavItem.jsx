export default function NavItem({ children, href, active, onClick }) {
	return (
		<li onClick={onClick}>
			<a href={href} className={`hover:text-orange-400 md:text-black ${active ? 'text-orange-400' : 'text-white'} lg:text-lg`}>
				{children}
			</a>
		</li>
	);
}
