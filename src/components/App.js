import React, { useState, useEffect } from 'react';

import SearchBar from './SearchBar';
import StartingPage from './StartingPage';
import DisplayVideo from './DisplayVideo';
import useVideos from '../hooks/useVideos';

import 'semantic-ui-css/semantic.min.css';

const App = () => {

    const [selectedVideo, setSelectedVideo] = useState(null);

    const NUMBER_OF_VIDEOS_TO_FETCH = !selectedVideo ? 50 : 5;
    
    const [videos, search] = useVideos('react', NUMBER_OF_VIDEOS_TO_FETCH);

    
    return(
        <div className="ui container">
            <SearchBar onFormSubmit={search} label="Video search" />
            <DisplayVideo selectedVideo={selectedVideo} onVideoSelect={setSelectedVideo} videos={videos} />
        </div>
    )

}

export default App;