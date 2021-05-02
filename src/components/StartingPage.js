import React from 'react';

import VideoItem from './VideoItem';

import '../css/StartingPageVideoList.css';

const StartingPage = ({ onVideoSelect, videos }) => {

    const renderVideoList = () => {
        console.log(videos);
        return (
            videos.map(video => {
                return (
                    <div key ={video.id.videoId} className="three wide column starting-page">
                        <VideoItem setClass="videos" onVideoSelect={onVideoSelect} video={video} />)
                    </div>
                )
            })
        )
    }

    return (
        <div className="ui grid">
            <div className="ui row">
                {renderVideoList()}
            </div>
        </div>
    )

}

export default StartingPage;