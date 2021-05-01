import React, { useState } from 'react';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import useVideos from '../hooks/useVideos';

import 'semantic-ui-css/semantic.min.css';

const App = () => {

    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('react');

    console.log(videos);

    return (
        <div className="ui container">
            <SearchBar label="Video search" onFormSubmit={search}/>
        </div>
    )
};

export default App;