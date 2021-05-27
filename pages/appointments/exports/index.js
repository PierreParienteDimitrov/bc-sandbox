import SidebarLayout from '../../../components/layouts/SidebarLayout';
import SiteLayout from '../../../components/layouts/SiteLayout';

const Exports = () => {
	return (
		<div>
			<p>This is exports</p>
		</div>
	);
};

Exports.getLayout = (page) => (
	<SiteLayout>
		<SidebarLayout>{page}</SidebarLayout>
	</SiteLayout>
);

export default Exports;
