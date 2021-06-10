import { VideoData } from '../models';

class ApiClient {

  constructor() {
    this._url = `${process.env.REACT_APP_BACKEND_URL}`;
  }

  public async getSearchResults(keyword: string, page = ''): Promise<VideoData[]> {
    const data = await this._fetchData(keyword, page);
    return this._parseData(data);
  }

  private _url: string;

  private async _fetchData(keyword: string, page: string): Promise<any> {
    let path = page
      ? `api/search?keyword=${keyword}&page=${page}`
      : `api/search?keyword=${keyword}`;

    try {
      const res = await fetch(`${this._url}/${path}`)
      const data = await res.json();
      return data;
    } catch (err){
      console.error(err);
    }
  }

  private _parseData(data: any): VideoData[] {
    return (
      data.items.map((el: any) => ({
        title: el.snippet.title,
        channelTitle: el.snippet.channelTitle,
        viewCount: el.statistics.viewCount,
        description: el.snippet.description,
        thumbnail: el.snippet.thumbnails.medium.url,
        videoUrl: `https://www.youtube.com/watch?v=${el.id}`,
        publishedAt: el.snippet.publishedAt,
      }))
    );
  }

}

export default ApiClient;
