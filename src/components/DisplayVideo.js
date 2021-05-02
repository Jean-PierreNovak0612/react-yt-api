import React from 'react';

import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

const DisplayVideo = ({ selectedVideo, onVideoSelect, videos }) => {
    return (
        <div className="ui grid">
            <div className="ui row">
                <div className="eleven wide column">
                    <VideoDetail video={selectedVideo} />
                </div>
                <div className="five wide column">
                    <VideoList onVideoSelect={onVideoSelect} videos={videos} />
                </div>
            </div>
        </div>
    )
}

export default DisplayVideo;