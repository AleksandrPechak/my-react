import axios from 'axios';
// import { fetchingError, fetchingInProgress, fetchingSuccess } from './slice';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3000';

// export const fetchTours = () => async (dispatch) => {
// 	try {
// 		dispatch(fetchingInProgress());
// 		const res = await axios.get('/tours');
// 		console.log(res);
// 		dispatch(fetchingSuccess(res.data));
// 	} catch (error) {
// 		console.log(error);
// 		dispatch(fetchingError(error.message));
// 	}
// };

export const fetchToursThunk = createAsyncThunk('tours/fetchAll', async (_, thunkApi) => {
	try {
		const res = await axios.get('/tours');
		// payload for fulfilled
		return res.data;
	} catch (error) {
		// payload for reject
		return thunkApi.rejectWithValue(error.message);
	}
});

export const removeTourByIdThunk = createAsyncThunk(
	'tours/removeById',
	async (tourId, thunkApi) => {
		try {
			await axios.delete(`/tours/${tourId}`);
			const res = await axios.get('/tours');

			console.log(res.data);
			return res.data;
		} catch (error) {
			return thunkApi.rejectWithValue(error.message);
		}
	}
);