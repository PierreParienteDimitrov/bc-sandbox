import Link from 'next/link';
import { useRouter } from 'next/router';
import { appointmentsNav } from '../../utils/nav/appointmentsNav';

const SideNav = () => {
	const router = useRouter();

	const bookBtn = () => {
		alert('clicked');
		analytics.track('Book Button Clicked');
	};

	return (
		<div className='fixed w-60 left-0 top-16 flex flex-col bg-gray-200 h-full shadow-sideNav z-10 px-2 py-4'>
			<ul className='mb-10'>
				{appointmentsNav.map((el, index) => {
					return (
						<li
							key={index}
							className={
								router.pathname == `/appointments/${el.href}`
									? 'flex shadow-sideBtn rounded-md bg-blue-300'
									: 'flex rounded-md'
							}
						>
							<Link href={`/appointments/${el.href}`}>
								<a
									className={
										router.pathname == `/appointments/${el.href}`
											? 'px-4 py-2 text-white'
											: 'px-4 py-2'
									}
								>
									{el.title}
								</a>
							</Link>
						</li>
					);
				})}
			</ul>
			<div className='absolute bottom-24 left-0 w-full px-2'>
				<button
					className='rounded-md w-full bg-orange-100 px-4 py-2 uppercase text-sm font-semibold tracking-wide shadow-ctaBtn'
					onClick={bookBtn}
				>
					Book Appointments
				</button>
			</div>
		</div>
	);
};

export default SideNav;
