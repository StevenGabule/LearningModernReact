import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {Authorization: 'Client-ID 35aa49d521b0adb6a5a3a6403dbb83b753f392de565fd998538110d953397593'}

});