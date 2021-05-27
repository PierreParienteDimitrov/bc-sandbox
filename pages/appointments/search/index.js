import SidebarLayout from '../../../components/layouts/SidebarLayout';
import SiteLayout from '../../../components/layouts/SiteLayout';

const Search = () => {
	return (
		<div>
			<p>This is the search</p>
		</div>
	);
};

Search.getLayout = (page) => (
	<SiteLayout>
		<SidebarLayout>{page}</SidebarLayout>
	</SiteLayout>
);

export default Search;
