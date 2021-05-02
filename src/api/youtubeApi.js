import axios from 'axios';

const KEY = 'AIzaSyCNvQsJ2A-8Pc2VGMYl6IL5RpnvZhJJ_78';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 10,
        key: KEY
    }
})