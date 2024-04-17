import { useParams, Outlet, Link } from 'react-router-dom';

const TourMore = () => {
	const { tourId } = useParams();

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