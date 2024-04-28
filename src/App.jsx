import { Suspense, useEffect, useState, lazy } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import dayjs from 'dayjs';

import { useTheme } from './components/theme-provider/ThemeProvider';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

// Sync
import Tours from './pages/tours/Tours';
import TourDetails from './pages/tour-details/TourDetails';
import TourMore from './components/tours/tour-more/TourMore';

// Async
const About = lazy(() => import('./pages/about/About'));
const ContactUs = lazy(() => import('./pages/contact-us/ContactUs'));

const App = () => {
	const { theme } = useTheme();
	const [lastUpdatedDate, setLastUpdatedDate] = useState(null);

	const location = useLocation();

	useEffect(() => {
		// console.log('work useEffect in App', dayjs().format('HH:mm:ss MMMM,DD'));
		setLastUpdatedDate(dayjs());
	}, [theme]);

	// useEffect(() => {
	// 	console.log('url path name was changed to:', location.pathname);
	// 	confirm('Are You sure leave this page ?');
	// }, [location.pathname]);

	const role = 'client';

	return (
		<div className='app-container'>
			<Header lastUpdatedDate={lastUpdatedDate} />

			<Suspense fallback={<div>loading in progress...</div>}>
				<Routes>
					{/* Sync */}
					<Route path='/' element={<Tours />}>
						<Route path=':tourId' element={<TourMore />}>
							<Route path='price' element={<div>price will be here</div>} />
							<Route path='foo' element={<div>foo will be here</div>} />
						</Route>
					</Route>
					<Route path='details/:tourId' element={<TourDetails />} />

					{/*  Async  */}
					<Route path='/about' element={<About />} />
					<Route path='/contact-us' element={<ContactUs />} />

					<Route
						path='/admin'
						element={<>{role === 'admin' ? <div>Admin</div> : <Navigate to='/client' />}</>}
					/>

					<Route path='*' element={<div className='common-page-container'>Not found</div>} />
				</Routes>
			</Suspense>

			<Footer />
		</div>
	);
};

export default App;