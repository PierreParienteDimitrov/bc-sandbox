import { useRouter } from 'next/router';
import { useEffect } from 'react';
import SiteLayout from '../components/layouts/SiteLayout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	// Tracks current and previous page with sessionStorage
	const router = useRouter();

	useEffect(() => {
		// previous url
		let prevPath = storePathValues();
		// console.log(prevPath);
		console.log(router.pathname);

		// comparing current url to previous and triggers analytics if different
		if (router.pathname !== prevPath) {
			prevPath = router.pathname;
			analytics.page();
		}
	}, [router.asPath]);

	// Store Path Values
	function storePathValues() {
		const storage = globalThis?.sessionStorage;
		if (!storage) return;
		// Set the previous path as the value of the current path.
		const prevPath = storage.getItem('currentPath');
		console.log(prevPath);
		storage.setItem('prevPath', prevPath);
		// Set the current path value by looking at the browser's location object.
		storage.setItem('currentPath', globalThis.location.pathname);

		return prevPath;
	}

	// Implements the persistent layout across all pages
	const getLayout =
		Component.getLayout || ((page) => <SiteLayout children={page} />);
	return getLayout(<Component {...pageProps} />);
}

export default MyApp;
