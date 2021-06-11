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
    let loading = useRef(true);

    const [maxPagination, setMaxPagination] = useState(2);
    const [videos, setVideos] = useState<Array<VideoData>>([]);

    const handleBottomScroll = (ev: UIEvent<HTMLDivElement>) => {
        const target = ev.target as Element;

        if (target.scrollHeight - target.scrollTop === target.clientHeight) {
            !loading.current && setMaxPagination(maxPagination - 1);
        }
    }

    useEffect(() => {
        client.getSearchResults(keyword)
            .then(data => {
                loading.current = false;
                setVideos(data.videos);
                nextPage.current = data.nextPageToken;
            })
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        if (!loading.current && maxPagination > 0 && nextPage.current) {
            loading.current = true;
            client.getSearchResults(keyword, nextPage.current)
                .then(data => {
                    setVideos(videos.concat(data.videos));
                    nextPage.current = data.nextPageToken;
                    loading.current = false;
                })
                .catch(err => console.error(err));
        }
    }, [maxPagination]);


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