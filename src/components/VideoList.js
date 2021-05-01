import React from 'react';

import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {

    const renderListOfVideos = videos.map(video => <VideoItem key ={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />)

    return (
        <div className="ui relaxed divided list">
            {renderListOfVideos}
        </div>
    )

};

export default VideoList;