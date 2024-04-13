import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import dayjs from 'dayjs';

import { useTheme } from './components/theme-provider/ThemeProvider';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Tours from './pages/tours/Tours';
import About from './pages/about/About';
import ContactUs from './pages/contact-us/ContactUs';
import TourDetails from './pages/tour-details/TourDetails';
import TourMore from './pages/tour-more/TourMore';

const App = () => {
	const { theme } = useTheme();
	const [lastUpdatedDate, setLastUpdatedDate] = useState(null);

	useEffect(() => {
		// console.log('work useEffect in App', dayjs().format('HH:mm:ss MMMM,DD'));
		setLastUpdatedDate(dayjs());
	}, [theme]);

	return (
		<div className='app-container'>
			<Header lastUpdatedDate={lastUpdatedDate} />

			<Routes>
				<Route path='/tours' element={<Tours />}>
					<Route path=':tourId' element={<TourMore />}>
						<Route path='price' element={<div>price will be here</div>} />
					</Route>
				</Route>
				<Route path='/tours/details/:tourId' element={<TourDetails />} />

				<Route path='/about' element={<About />} />
				<Route path='/contact-us' element={<ContactUs />} />
				<Route path='*' element={<div className='common-page-container'>Not found</div>} />
			</Routes>

			<Footer />
		</div>
	);
};

export default App;