import { useEffect, useState } from 'react';
import clsx from 'clsx';

import TourItem from '../tour-item/TourItem';
import TourFormik from '../tourFormik/TourFormik';

import { fetchTours } from '../../api/tours';

import './Tours.scss';

const Tours = ({ theme }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [loading, setloading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [tours, setTours] = useState([]);

	const [searchValue, setSearchValue] = useState('');

	const loadTourWithQuery = async (value) => {
		try {
			setTours([]);
			setloading(true);
			const resData = await fetchTours(value);
			setTours(resData);
		} catch (error) {
			setIsError(true);
		} finally {
			setloading(false);
		}
	};

	useEffect(() => {
		loadTourWithQuery(searchValue);
	}, [searchValue]);

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

			<TourFormik visible={isOpen} onClose={handleCloseModal} onAddTour={handleAddTour} />

			{loading && <p>Loading data, please wait...</p>}
			{isError && <p>Whoops, something went wrong! Please try reloading this page!</p>}

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