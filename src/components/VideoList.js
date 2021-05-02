import React from 'react';

import VideoItem from './VideoItem';

import '../css/VideoItem.css';

const VideoList = ({ videos, onVideoSelect }) => {

    const renderListOfVideos = videos.map(video => <VideoItem setClass="video-item" key ={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />)

    return (
        <div className="ui relaxed divided list">
            {renderListOfVideos}
        </div>
    )

};

export default VideoList;