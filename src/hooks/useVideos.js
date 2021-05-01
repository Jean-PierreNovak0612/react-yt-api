import { useEffect, useState } from 'react';

import youtube from '../api/youtubeApi';

const useVideos = (defaultSearchTerm) => {
    
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [dfaultSearchTerm]);

    const search = async (term) => {
        const response = await youtube('/search', {
            params: {
                q: term
            }
        });

        setVideos(response.data.items);

    };

    return [videos, search];

}

export default useVideos;