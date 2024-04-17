import { Link, Outlet, useParams } from 'react-router-dom';
import clsx from 'clsx';

import './TourItem.scss';

const TourItem = ({ id, name, price, description, continent, ageCategory, isHot, onDelete }) => {
	const { tourId } = useParams();

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
				<button className='btn secondary' onClick={() => onDelete(id)}>
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