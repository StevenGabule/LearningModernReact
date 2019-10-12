import axios from 'axios';

const KEY = 'AIzaSyDkG25Np9zFS0nOnReruGAR4UcK6uKLVt4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 25,
        key: KEY
    }
});