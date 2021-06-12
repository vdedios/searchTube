import React from 'react';
import moment from 'moment';

import { VideoData } from '../../../../models';
import {
    Thumbnail,
    InfoWrapper,
    VideoWrapper,
    Title,
    Channel,
    ViewsWrapper,
    ViewsLabel,
    Views,
    Description,
    Published,
} from './Video.styled';

const Video: React.FC<VideoData> = ({
    title,
    channelTitle,
    viewCount,
    description,
    thumbnail,
    videoUrl,
    publishedAt,
}: VideoData) => {

    return (
        <VideoWrapper href={videoUrl} target='_blank'>
            <Thumbnail src={thumbnail} width={320} alt='thumbnail' />
            <InfoWrapper>
                <Title>{title}</Title>
                <Channel>{channelTitle}</Channel>
                <ViewsWrapper>
                    <Views>{parseInt(viewCount).toLocaleString('en-US')}</Views>
                    <ViewsLabel>Views</ViewsLabel>
                </ViewsWrapper>
                <Description>{description}</Description>
                <Published>{moment(Date.parse(publishedAt)).fromNow()}</Published>
            </InfoWrapper>
        </VideoWrapper>
    );
}

export default Video;
