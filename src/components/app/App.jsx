import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import Header from '../header/Header';
import Tours from '../tours/Tours';
import Footer from '../footer/Footer';

const App = () => {
	const [theme, setTheme] = useState('dark');
	const [lastUpdatedDate, setLastUpdatedDate] = useState(null);
	// const [counter, setCounter] = useState(0);

	useEffect(() => {
		// console.log('work useEffect in App', dayjs().format('HH:mm:ss MMMM,DD'));
		// console.log('work useEffect in App');
		setLastUpdatedDate(dayjs());
	}, [theme]);

	const toggleTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	};

	// console.log('render App', lastUpdatedDate);
	return (
		<div className='app-container'>
			<Header theme={theme} toggleTheme={toggleTheme} lastUpdatedDate={lastUpdatedDate} />
			<Tours theme={theme} />
			<Footer />
		</div>
	);
};

export default App;