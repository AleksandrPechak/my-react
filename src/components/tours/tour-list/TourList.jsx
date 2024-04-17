import TourItem from '../tour-item/TourItem';

const TourList = ({ tours, handleDeleteTour }) => {
	return (
		<ul className='tours-list'>
			{tours.map((tour) => (
				<TourItem key={tour.id} {...tour} onDelete={handleDeleteTour} />
			))}
		</ul>
	);
};

export default TourList;