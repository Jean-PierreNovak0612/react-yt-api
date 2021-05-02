import React, { useState } from 'react';

import SearchBar from './SearchBar';
import StartingPage from './StartingPage';
import DisplayVideo from './DisplayVideo';
import useVideos from '../hooks/useVideos';

import 'semantic-ui-css/semantic.min.css';

const App = () => {

    const [selectedVideo, setSelectedVideo] = useState(null);
    
    const [videos, search] = useVideos('react');
    
    return(
        <div className="ui container">
            <SearchBar onFormSubmit={search} label="Video search" clearSelectedVideo={setSelectedVideo} />
            {
                !selectedVideo ? 
                <StartingPage onVideoSelect={setSelectedVideo} videos={videos} /> :
                <DisplayVideo selectedVideo={selectedVideo} onVideoSelect={setSelectedVideo} videos={videos} />
            }
        </div>
    )

}

export default App;