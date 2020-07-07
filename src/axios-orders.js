import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-d9cd6.firebaseio.com/'
});

export default instance;