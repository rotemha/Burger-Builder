import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-d61a0.firebaseio.com/'
});

export default instance;
