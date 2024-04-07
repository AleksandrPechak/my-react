import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

const fetchTours = async (query) => {
	const requestUrl = query ? `/tours?name=${query}` : '/tours';
	const res = await axios.get(requestUrl);
	return res.data;
};

export { fetchTours };