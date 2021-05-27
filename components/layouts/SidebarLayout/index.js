import SideNav from '../../SideNav';
import Notifications from '../../Notifications';
import styles from './SidebarLayout.module.css';

const SidebarLayout = ({ children }) => {
	return (
		<div className={styles.main}>
			<SideNav />
			<div className='relative top-16 left-60 px-10 py-6'>{children}</div>
			<Notifications />
		</div>
	);
};

export default SidebarLayout;
