import { useEffect, useState } from 'react';
import clsx from 'clsx';


import { fetchTours } from '../../api/tours';
import TourItem from '../tour-item/TourItem';

import './Tours.scss';
import TourFormik from '../tourFormik/TourFormik';

const Tours = ({ theme }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const [tours, setTours] = useState([]);

	const [searchValue, setSearchValue] = useState('');

	useEffect(() => {
		const load = async () => {
		// 	const res = await axios.get('http://localhost:3000/tours');
			// 	console.log(res.data);
			try {
				setLoading(true);
				const resData = await fetchTours();
				console.log(resData);
				setTours(resData);
	        } catch (error) {
				console.log(error);
			} finally {
				console.log('work finally');
				setLoading(false);
			}
             
		};

		load();
		// console.log('work useEffect');
	}, []);

	// useEffect(() => {
	// 	// console.log('work after mount in Tours page');
	// 	const load = async () => {
	// 		const responseData = await fetchTours();
	// 		// console.log('load success', responseData);
	// 		window.localStorage.setItem('tours', JSON.stringify(responseData));
	// 		setTours(responseData);
	// 	};

	// 	const localStorageData = window.localStorage.getItem('tours');

	// 	// console.log('response from localStorage', localStorageData);

	// 	if (localStorageData) {
	// 		setTours(JSON.parse(localStorageData));
	// 		// console.log(JSON.parse(localStorageData));
	// 	} else {
	// 		load();
	// 	}
	// }, []);

	const handleChangeSearch = (event) => {
		setSearchValue(event.target.value);
	};

	// Modal actions

	const handleOpenModal = () => {
		setIsOpen(true);
	};

	const handleCloseModal = () => {
		setIsOpen(false);
	};

	// Tour action

	const handleAddTour = (tourItem) => {
		setTours((prevState) => {
			// return new state
			return [...prevState, tourItem];
		});
	};

	const handleDeleteTour = (id) => {
		const nextTours = [...tours];
		const index = nextTours.findIndex((tour) => tour.id === id);
		nextTours.splice(index, 1);
		setTours(nextTours);
	};

	return (
		<main
			className={clsx('tours-page', {
				light: theme === 'light',
				dark: theme === 'dark',
			})}>
			<div className='tours-page-top'>
				<h4>Tours Page</h4>

				<input
					type='text'
					value={searchValue}
					placeholder='Search...'
					onChange={handleChangeSearch}
				/>

				<button className='btn secondary' onClick={handleOpenModal}>
					Add tour
				</button>
			</div>

			{/* <TourForm visible={isOpen} onClose={handleCloseModal} onAddTour={handleAddTour} /> */}
			<TourFormik visible={isOpen} onClose={handleCloseModal} onAddTour={handleAddTour} />

			{loading && <p>Loading data, please wait...</p>}

			<ul className='tours-list'>
				{tours.length > 0 && (
					<>
						{tours.map((tour) => (
							<TourItem key={tour.id} {...tour} onDelete={handleDeleteTour} />
						))}
					</>
				)}
			</ul>
		</main>
	);
};

export default Tours;