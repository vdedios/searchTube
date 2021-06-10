import React, { useState, useEffect } from 'react';

import ApiClient from './services/ApiClient';
import { VideoData } from './models';
import { SearchBox, Video } from './components'

const client = new ApiClient();

const App: React.FC = () => {

  const [keyword, setKeyword] = useState('');
  const [videos, setVideos] = useState<Array<VideoData>>([]);

  useEffect(() => {
    if (keyword) {
      client.getSearchResults(keyword)
      .then(data => setVideos(data))
      .catch(err => console.error(err));
    }
  }, [keyword]);

  return (
    <div>
      { keyword === '' && <SearchBox setKeyword={setKeyword}/> }
      { videos.length !== 0 &&
        <div>
          {
            videos.map((video: VideoData) =>
              <Video
                title={video.title}
                channelTitle={video.channelTitle}
                viewCount={video.viewCount}  
                description={video.description}
                thumbnail={video.thumbnail}
                videoUrl={video.videoUrl}
                publishedAt={video.publishedAt}
              />
            )
          }
        </div>
      }
    </div>
  );
}

//Añadir un loader al final por defecto

export default App;
