import * as Types from './constants';

export const addNewTour = (newTour) => {
	return {
		type: Types.ADD_NEW_TOUR,
		payload: newTour,
	};
};

export const deleteTour = (id) => {
	return {
		type: Types.DELETE_TOUR,
		payload: id,
	};
};