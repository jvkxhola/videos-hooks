import './App.css';
import React, {useEffect, useState} from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetails';
import useVideos from '../hooks/useVideos';

const App= () => {

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('buildings');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  }


    return (
      <div className="ui container">
        <SearchBar onSubmit={search} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList videos={videos} onSelect={onVideoSelect} />
            </div>
          </div>
        </div>
      </div>

    );


}

export default App;