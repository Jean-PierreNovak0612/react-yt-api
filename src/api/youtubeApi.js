import axios from 'axios';

const KEY = 'AIzaSyDO7SSKJsK7a5T0etj5FOFBq1OYwqHCPLE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 10,
        key: KEY
    }
})