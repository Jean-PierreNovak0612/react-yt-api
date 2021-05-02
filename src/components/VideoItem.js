import React from 'react';

const VideoItem = ({ video, onVideoSelect, setClass = '' }) => {
    return (
        <div onClick={() => onVideoSelect(video)} className={`item ${setClass}`}>
            <img alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    )
}

export default VideoItem;