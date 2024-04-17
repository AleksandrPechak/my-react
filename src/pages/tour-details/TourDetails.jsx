import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchToursById } from '../../api/tours';

const TourDetails = () => {
	const { tourId } = useParams();

	const [tour, setTour] = useState({});

	useEffect(() => {
		const load = async () => {
			const res = await fetchToursById(tourId);
			setTour(res[0]);
		};
		load();
	}, [tourId]);

	return (
		<div className='common-page-container'>
			<h4>Details tour page</h4>
			<p>Details for tour id: {tourId}</p>
			{tour && (
				<>
					<p>Name: {tour.name}</p>
					<p>Price: {tour.price}</p>
					<p>Description: {tour.description}</p>
				</>
			)}
		</div>
	);
};

export default TourDetails;