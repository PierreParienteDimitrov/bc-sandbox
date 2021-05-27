import { useRouter } from 'next/router';
import TopNavBtn from '../../TopNavBtn';
import { topNavLinks } from '../../../utils/nav/topNavLinks';

const TopNav = () => {
	const router = useRouter();

	return (
		<div className='fixed top-0 left-0 w-full h-16 px-8 flex items-center bg-white shadow-topNav z-200'>
			<ul className='flex'>
				{topNavLinks.map((el, index) => {
					return (
						<TopNavBtn
							key={index}
							title={el.title}
							bgColor={router.pathname == `${el.href}` ? 'bg-gray-200' : ''}
							fontWeight={router.pathname == el.href ? 'font-medium' : 'font-light'}
							href={el.href}
						/>
					);
				})}
			</ul>
		</div>
	);
};

export default TopNav;
