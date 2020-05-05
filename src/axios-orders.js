import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-7405e.firebaseio.com/'
});

export default instance;