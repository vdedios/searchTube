export interface VideoData {
  title: string;
  channelTitle: string;
  viewCount: string;  
  description: string;
  thumbnail: string;
  videoUrl: string;
  publishedAt: string;
}

export interface SearchResults {
  videos: VideoData[];
  nextPageToken: string;
}

export interface KeywordParam {
    keyword: string;
}