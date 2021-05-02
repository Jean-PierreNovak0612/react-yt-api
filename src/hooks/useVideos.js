import { useEffect, useState } from 'react';

import youtube from '../api/youtubeApi';

const useVideos = (defaultSearchTerm, numberOfVideos = 5) => {
    
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm, numberOfVideos);
    }, [defaultSearchTerm, numberOfVideos]);

    const search = async (term, videoCount) => {
        const response = await youtube('/search', {
            params: {
                q: term,
                maxResults: videoCount
            }
        });

        setVideos(response.data.items);

    };

    return [videos, search];

}

export default useVideos;