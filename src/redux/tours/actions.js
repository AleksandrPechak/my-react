// import { createAction } from '@reduxjs/toolkit';
// import * as Types from './constants';

/* ====================do not use redux-toolkit======================== */

// export const addNewTour = (newTour) => {
// 	return {
// 		type: Types.ADD_NEW_TOUR,
// 		payload: newTour,
// 	};
// };

// export const deleteTour = (id) => {
// 	return {
// 		type: Types.DELETE_TOUR,
// 		payload: id,
// 	};
// };

/* ====================use redux-toolkit========================= */

// export const addNewTour = createAction(Types.ADD_NEW_TOUR);
// export const deleteTour = createAction(Types.DELETE_TOUR);

