import React, { useState, useEffect } from 'react';

import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

const DisplayVideo = ({ selectedVideo, onVideoSelect, videos }) => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setIsMobile(window.innerWidth <= 700);
        }, false);

        return () => {
            window.removeEventListener('resize', () => {
                setIsMobile(window.innerWidth <= 700);
            }, false);
        }
    }, [])

    const videoDetailWidth = isMobile ? 'sixteen' : 'eleven';
    const videoListWidth = isMobile ? 'sixteen spaces' : 'five';

    return (
        <div className="ui grid">
            <div className="ui row">
                <div className={`${videoDetailWidth} wide column`}>
                    <VideoDetail video={selectedVideo} />
                </div>
                <div className={`${videoListWidth} wide column`}>
                    <VideoList onVideoSelect={onVideoSelect} videos={videos} />
                </div>
            </div>
        </div>
    )
}

export default DisplayVideo;