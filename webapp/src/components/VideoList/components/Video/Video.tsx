import React from 'react';
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
    Description
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
    <VideoWrapper>
	    <Thumbnail src={thumbnail} width={320} alt='thumbnail'/>
        <InfoWrapper>
            <Title>{title}</Title>
            <Channel>{channelTitle}</Channel>
            <ViewsWrapper>
                <Views>{viewCount}</Views>
                <ViewsLabel>Views</ViewsLabel>
            </ViewsWrapper>
            <Description>{description}</Description>
            <p>{publishedAt}</p>
            <a href={videoUrl}>link</a>
        </InfoWrapper>
    </VideoWrapper>
  );
}

export default Video;
