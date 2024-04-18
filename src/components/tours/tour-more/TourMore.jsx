import { useParams, Outlet, Link, useLocation } from 'react-router-dom';

const TourMore = () => {
	const { tourId } = useParams();
	const location = useLocation();

	console.log(location);

	return (
		<div>
			more info about {tourId}
			<div>
				<Link to='price'>Open price</Link>
			</div>
			<Outlet />
		</div>
	);
};

export default TourMore;