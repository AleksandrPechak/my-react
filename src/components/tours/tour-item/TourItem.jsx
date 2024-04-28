import { Link, Outlet, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';

import { removeTour } from '../../../redux/tours/slice';

import './TourItem.scss';
// import { removeTourByIdThunk } from '../../../redux/tours/operation';

const TourItem = ({ id, name, price, description, continent, ageCategory, isHot }) => {
	const dispatch = useDispatch();
	const { tourId } = useParams();

	const handleDeleteTour = () => {
		dispatch(removeTour(id));
		// dispatch(removeTourByIdThunk(id));
	};

	return (
		<li className={clsx('tour-item', { isHot: isHot })}>
			<div className='tour-item-row'>
				<p className='title'>Name:</p>
				<p>{name}</p>
			</div>
			<div className='tour-item-row'>
				<p className='title'>Price:</p>
				<p>{price}$</p>
			</div>

			{/* {description && (
				<div className='tour-item-row'>
					<p className='title'>Description:</p>
					<p>{description}</p>
				</div>
			)} */}
			<div className='tour-item-row'>
				<p className='title'>Continent:</p>
				<p>{continent}</p>
			</div>
			{ageCategory && (
				<div className='tour-item-row'>
					<p className='title'>Age category:</p>
					<p>{ageCategory}</p>
				</div>
			)}
			<div className='tour-item-row controlls'>
				<button className='btn secondary' onClick={handleDeleteTour}>
					Delete
				</button>
				<Link to={`/${id}`} className='btn secondary' state={{ description }}>
					More
				</Link>

				<Link to={`/details/${id}`} className='btn secondary' replace>
					Details
				</Link>
			</div>

			{tourId === id && <Outlet />}
		</li>
	);
};

export default TourItem;