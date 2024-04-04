import axios from 'axios';

const fetchTours = async () => {
    const res = await axios.get('http://localhost:3000/tours');
    return res.data.sort((a,b)=>a.price - b.price);		
    // console.log(res.data);
    // console.log('work', value);
};

export { fetchTours };