import axios from 'axios';
const KEY = 'AIzaSyBX9kOc4OavjvLYGj31UBsMYhoIArijHQQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResult: 5,
        key: KEY
    }
});


