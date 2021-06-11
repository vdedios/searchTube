import React, { useState, useEffect, UIEvent } from 'react';

import ApiClient from './services/ApiClient';
import { VideoData } from './models';
import { SearchBox, Video, Loader } from './components'

const client = new ApiClient();

const App: React.FC = () => {

  const [keyword, setKeyword] = useState('');
  const [videos, setVideos] = useState<Array<VideoData>>([]);
  const [pagination, setPagination] = useState(5);
  const [nextPage, setNextPage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (keyword && !loading && pagination > 0) {
      setLoading(true);
      console.log(pagination);
      if (nextPage) {
        client.getSearchResults(keyword, nextPage)
        .then(data => {
          const acc = videos.concat(data.videos);
          setVideos(acc);
          setNextPage(data.nextPageToken);
          setLoading(false);
        })
        .catch(err => console.error(err));
      } else {
        client.getSearchResults(keyword)
        .then(data => {
          setVideos(data.videos);
          setNextPage(data.nextPageToken);
          setLoading(false);
        })
        .catch(err => console.error(err));
      }
    }
  }, [keyword, pagination]);

  const handleBottomScroll = (ev: UIEvent<HTMLDivElement>) => {
    const target = ev.target as Element;

    if (target.scrollHeight - target.scrollTop === target.clientHeight) {
      !loading && setPagination(pagination - 1);
    }
  }

  return (
    <div
      onScroll={handleBottomScroll}
      style={{overflowY: 'scroll', position: 'fixed',top: 0, right: 0, bottom: 0, left: 0, }}
    >
      { !keyword && <SearchBox setKeyword={setKeyword}/> }
      { videos.length !== 0 &&
        <div>
          {
            videos.map((video: VideoData) =>
              <Video
                key={video.title}
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
      {keyword && loading && <Loader/>}
    </div>
  );
}

//Añadir un loader al final por defecto

export default App;
