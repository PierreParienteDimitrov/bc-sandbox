import SidebarLayout from '../../../components/layouts/SidebarLayout';
import SiteLayout from '../../../components/layouts/SiteLayout';

const AllContainers = () => {
	return (
		<div>
			<p>This is the all appointments</p>
		</div>
	);
};

AllContainers.getLayout = (page) => (
	<SiteLayout>
		<SidebarLayout>{page}</SidebarLayout>
	</SiteLayout>
);

export default AllContainers;
