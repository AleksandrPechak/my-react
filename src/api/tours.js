import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

const fetchTours = async (query) => {
	const requestUrl = query ? `/tours?name=${query}` : '/tours';
	const res = await axios.get(requestUrl);
	return res.data;
};
const fetchToursById = async (id) => {
	const res = await axios.get(`/tours?id=${id}`);
	return res.data;
};

export { fetchTours, fetchToursById };