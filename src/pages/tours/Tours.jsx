import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { selectTours } from '../../redux/tours/slice';

import { fetchToursThunk } from '../../redux/tours/operation';

import { useTheme } from '../../components/theme-provider/ThemeProvider';
import useToggle from '../../utils/hooks/useToggle';
import clsx from 'clsx';

import { DARK, LIGHT } from '../../utils/constantes';

import Loader from '../../components/common/loader/Loader';
import ErrorMessage from '../../components/common/error-message/ErrorMessage';

import TourFormik from '../../components/tours/tourFormik/TourFormik';
// import TourForm from '../../components/tours/tourForm/TourForm';
import TourList from '../../components/tours/tour-list/TourList';

import './Tours.scss';

const Tours = () => {
	const dispatch = useDispatch();
	const { isOpen, open, close } = useToggle();
	const { theme } = useTheme();

	const { isLoading, error, items } = useSelector(selectTours);

	useEffect(() => {
		// dispatch(fetchTours());
		dispatch(fetchToursThunk());
	}, [dispatch]);

	// State

	// const [searchValue, setSearchValue] = useState('');

	// URL Query string

	const [searchParams, setSearchParams] = useSearchParams();
	const searchValue = searchParams.get('name');

	const handleChangeSearch = (event) => {
		// setSearchValue(event.target.value);

		setSearchParams({ name: event.target.value });

		// Update specific params, save existed

		// setSearchParams((searchParams) => {
		// 	searchParams.set('name', event.target.value);
		// 	return searchParams;
		// });
	};

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

			{isLoading && <Loader />}
			{error && <ErrorMessage text={error} />}
			{items && <TourList tours={items} />}
		</main>
	);
};

export default Tours;
