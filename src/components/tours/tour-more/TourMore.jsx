import { Outlet, Link, useLocation } from 'react-router-dom';

const TourMore = () => {
	const location = useLocation();

	return (
		<div>
			{location.state.description}
			<div>
				<Link to='price'>Open price</Link>
			</div>
			<Outlet />
		</div>
	);
};

export default TourMore;