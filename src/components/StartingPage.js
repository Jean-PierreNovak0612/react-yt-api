import React, { useEffect, useState } from 'react';

import VideoItem from './VideoItem';

import '../css/StartingPageVideoList.css';

const StartingPage = ({ onVideoSelect, videos }) => {

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

    const itemWidth = isMobile ? 'sixteen' : 'three';

    const renderVideoList = () => {
        
        return (
            videos.map(video => {
                return (
                    <div key ={video.id.videoId} className={`${itemWidth} wide column starting-page`}>
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