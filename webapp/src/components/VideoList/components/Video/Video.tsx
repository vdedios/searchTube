import React from 'react';
import { VideoData } from '../../../../models';

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
    <>
        <h3>{title}</h3>
        <a href={videoUrl}>link</a>
	      <img src={thumbnail} width={320} alt='thumbnail'/>
        <p>{channelTitle}</p>
        <p>{viewCount}</p>
        <p>{publishedAt}</p>
        <p>{description}</p>
    </>
  );
}

export default Video;
