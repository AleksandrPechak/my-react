import { useSelector } from 'react-redux';
import TourItem from '../tour-item/TourItem';
import { selectTours } from '../../../redux/tours/selector';

const TourList = () => {
	const tours = useSelector(selectTours);

	if (tours.length) {
		return (
			<ul className='tours-list'>
				{tours.map((tour) => (
					<TourItem key={tour.id} {...tour} />
				))}
			</ul>
		);
	}
	return null;
};

export default TourList;