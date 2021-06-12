import React, { useState, useEffect, useRef, UIEvent } from 'react';
import { useParams } from 'react-router-dom';

import ApiClient from '../../services/ApiClient';
import { VideoData, KeywordParam } from '../../models';
import { Video, Loader, NotFound } from './components';
import { Title, Wrapper } from './VideoList.styled';
import { ui } from '../../mocks';

const client = new ApiClient();

const VideoList: React.FC = () => {

    const { keyword } = useParams<KeywordParam>();

    let nextPage = useRef('');
    let videos = useRef<Array<VideoData>>([]);

    const [maxPagination, setMaxPagination] = useState(ui.videos.maxPagination);
    const [load, setLoad] = useState(true);
    const [err, setErr] = useState('');

    const handleBottomScroll = (ev: UIEvent<HTMLDivElement>) => {
        const target = ev.target as Element;

        if (target.scrollHeight - target.scrollTop === target.clientHeight && maxPagination > 1) {
            setLoad(true);
            setMaxPagination(maxPagination - 1);
        }
    }

    useEffect(() => {
        if (!err && load && maxPagination > 0) {
            client.getSearchResults(keyword, nextPage.current)
                .then(data => {
                    if (data.errCode) {
                        setErr(data.errCode);
                        setLoad(false);
                    } else {
                        videos.current = videos.current.concat(data.videos);
                        setLoad(false);
                        nextPage.current = data.nextPageToken;
                        if (!nextPage.current) {
                            setMaxPagination(0);
                        }
                    }
                })
                .catch(err => console.error(err));
        }
    }, [maxPagination, keyword, load, err]);


    return (
        <Wrapper onScroll={handleBottomScroll} >
            <Title>{`${ui.videos.result} "${keyword}"`}</Title>
            {
                videos.current.map((video: VideoData) =>
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
            {load && <Loader />}
            {!videos.current.length && !load && <NotFound err={err} />}
        </Wrapper>
    );
};

export default VideoList;
