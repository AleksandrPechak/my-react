import TourItem from '../tour-item/TourItem';

const TourList = ({ tours }) => {
	return (
		<ul className='tours-list'>
			{tours.map((tour) => (
				<TourItem key={tour.id} {...tour} />
			))}
		</ul>
	);
};

export default TourList;