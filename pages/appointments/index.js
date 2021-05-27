import SidebarLayout from '../../components/layouts/SidebarLayout';
import SiteLayout from '../../components/layouts/SiteLayout';

const Appointments = () => {
	return (
		<div>
			<p>Home</p>
		</div>
	);
};

Appointments.getLayout = (page) => (
	<SiteLayout>
		<SidebarLayout>{page}</SidebarLayout>
	</SiteLayout>
);

export default Appointments;
