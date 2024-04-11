import { useEffect, useState, } from 'react';
import dayjs from 'dayjs';

import Header from '../header/Header';
import Tours from '../tours/Tours';
import Footer from '../footer/Footer';
import  { useTheme } from '../theme-provider/ThemeProvider';

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
			<Tours />
			<Footer />
			</div>
	);
};

export default App;