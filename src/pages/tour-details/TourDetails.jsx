import { useParams } from 'react-router-dom';
import { fetchToursById } from '../../api/tours';
import { useEffect } from 'react';

const TourDetails = () => {
	const { tourId } = useParams();

	useEffect(() => {
		const load = async () => {
			const res = await fetchToursById(tourId);
			console.log(res);
		};
		load();
	}, [tourId]);

	return (
		<div className='common-page-container'>
			<h4>Details tour page</h4>
			<p>Details for tour {tourId}</p>
		</div>
	);
};

export default TourDetails;