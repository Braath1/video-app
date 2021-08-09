import React from 'react';
import '../css/VideoItems.css';

const VideoItems = ({ video, onVideoSelect }) => {
    return (
        <div onClick={() => onVideoSelect(video)} className="item video-items">
            <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    )
}

export default VideoItems;
