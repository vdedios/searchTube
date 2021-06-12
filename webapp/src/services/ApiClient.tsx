import { SearchResults } from '../models';

class ApiClient {

  constructor() {
    this._url = `${process.env.REACT_APP_BACKEND_URL}`;
  }

  public async getSearchResults(keyword: string, page = ''): Promise<SearchResults> {
    const data = await this._fetchData(keyword, page);
    return data;
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
}

export default ApiClient;
