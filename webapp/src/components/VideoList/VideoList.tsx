import React, { useState, useEffect, useRef, UIEvent } from 'react';

import ApiClient from '../../services/ApiClient';
import { VideoData } from '../../models';
import { Video, Loader } from './components';


interface VideoListProps {
    keyword: string;
}

const client = new ApiClient();

const VideoList: React.FC<VideoListProps> = ({ keyword }: VideoListProps) => {

    let nextPage = useRef('');
    let paginate = useRef(true);
    let loading = useRef(false);

    const [maxPagination, setMaxPagination] = useState(2);
    const [videos, setVideos] = useState<Array<VideoData>>([]);

    const handleBottomScroll = (ev: UIEvent<HTMLDivElement>) => {
        const target = ev.target as Element;

        if (
            target.scrollHeight - target.scrollTop === target.clientHeight
            && !loading.current
         ) {
            setMaxPagination(maxPagination - 1);
            paginate.current = true;
        }
    }

    useEffect(() => {
        if (!loading.current && maxPagination > 0 && paginate.current) {
            loading.current = true;
            paginate.current = false;
            client.getSearchResults(keyword, nextPage.current)
                .then(data => {
                    loading.current = false;
                    setVideos(videos.concat(data.videos));
                    nextPage.current = data.nextPageToken;
                    if (!nextPage.current) {
                        setMaxPagination(0);
                    }
                })
                .catch(err => console.error(err));
        }
    }, [maxPagination, keyword, videos]);


    return (
        <>
            <div
                onScroll={handleBottomScroll}
                style={{ overflowY: 'scroll', position: 'fixed', top: 0, right: 0, bottom: 0, left: 0, }}
            >
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
            {loading.current && <Loader />}
        </>
    );
};

export default VideoList;