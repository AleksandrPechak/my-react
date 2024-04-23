import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useTheme } from '../../components/theme-provider/ThemeProvider';
import useToggle from '../../utils/hooks/useToggle';
import clsx from 'clsx';

import { DARK, LIGHT } from '../../utils/constantes';

import Loader from '../../components/common/loader/Loader';
import ErrorMessage from '../../components/common/error-message/ErrorMessage';

import TourFormik from '../../components/tours/tourFormik/TourFormik';
import TourForm from '../../components/tours/tourForm/TourForm';
import TourList from '../../components/tours/tour-list/TourList';

import { fetchTours } from '../../api/tours';

import './Tours.scss';

const Tours = () => {
	const { isOpen, open, close } = useToggle();
	const { theme } = useTheme();

	const [loading, setloading] = useState(false);
	const [isError, setIsError] = useState(false);

	// State

	// const [searchValue, setSearchValue] = useState('');

	// URL Query string

	const [searchParams, setSearchParams] = useSearchParams();
	const searchValue = searchParams.get('name');

	// const loadTourWithQuery = useCallback(async (value) => {
	// 	try {
	// 		setTours([]);
	// 		setloading(true);
	// 		const resData = await fetchTours(value);
	// 		setTours(resData);
	// 	} catch (error) {
	// 		setIsError(true);
	// 	} finally {
	// 		setloading(false);
	// 	}
	// }, []);

	// useEffect(() => {
	// 	loadTourWithQuery(searchValue);
	// }, [searchValue, loadTourWithQuery]);

	const handleChangeSearch = (event) => {
		// setSearchValue(event.target.value);

		setSearchParams({ name: event.target.value });

		// Update specific params, save existed

		// setSearchParams((searchParams) => {
		// 	searchParams.set('name', event.target.value);
		// 	return searchParams;
		// });
	};

	// Tour action

	return (
		<main
			className={clsx('tours-page', {
				light: theme === LIGHT,
				dark: theme === DARK,
			})}>
			<div className='tours-page-top'>
				<h4>Tours Page</h4>

				<input
					type='text'
					value={searchValue || ''}
					placeholder='Search...'
					onChange={handleChangeSearch}
				/>

				<button className='btn secondary' onClick={open}>
					Add tour
				</button>
			</div>

			<TourFormik visible={isOpen} onClose={close} />
			{/* <TourForm visible={isOpen} onClose={close} onAddTour={handleAddTour} /> */}

			{loading && <Loader />}
			{isError && <ErrorMessage />}

			<TourList />
		</main>
	);
};

export default Tours;
