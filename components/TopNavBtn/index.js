import Link from 'next/link';

const TopNavBtn = ({ title, bgColor, href, fontWeight }) => {
	return (
		<li className={`mr-4 px-4 py-1 rounded-full ${bgColor}`}>
			<Link href={href}>
				<a className={fontWeight}>{title}</a>
			</Link>
		</li>
	);
};

export default TopNavBtn;
