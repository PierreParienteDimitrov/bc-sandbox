import SidebarLayout from '../../../components/layouts/SidebarLayout';
import SiteLayout from '../../../components/layouts/SiteLayout';
import Dasboard from '../../../components/Tables/Dashboard';

const Dashboards = () => {
	return (
		<div>
			<Dasboard />
		</div>
	);
};

Dashboards.getLayout = (page) => (
	<SiteLayout>
		<SidebarLayout>{page}</SidebarLayout>
	</SiteLayout>
);

export default Dashboards;
