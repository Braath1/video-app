import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';
import '../css/App.css';
import useVideos from '../hooks/useVideos';

const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('Mega Hits 2021');

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);

    return (
            <div className="ui container margin-top">
                <SearchBar 
                    onFormSubmit={search} 
                    />
                    <div className="ui grid">
                    <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetails 
                        video={selectedVideo} 
                        />
                    </div>
                    <div className="five wide column">
                        <VideoList 
                            onVideoSelect={setSelectedVideo} 
                            videos={videos} 
                            />
                    </div>
                </div>
            </div>
            </div>
        );

};

export default App;

