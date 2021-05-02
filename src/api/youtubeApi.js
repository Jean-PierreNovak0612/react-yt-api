import axios from 'axios';

const KEY = 'AIzaSyAdEnq3kGi3ZAsqUPAEZi1_T-XxatVyz5U';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        key: KEY
    }
})