from googleapiclient.discovery import build

from app_helper import filter_ids, filter_video_info

import os

api_key = os.getenv('API_KEY')
youtube = build('youtube', 'v3', developerKey=api_key)

def get_search_ids(keyword, page_token):
    search_req = youtube.search().list(
            part='id',
            q = keyword,
            order='date',
            maxResults=10,
            pageToken=page_token,
            type='video'
        )
    res = search_req.execute()
    return filter_ids(res)

def get_video_list(list):
    search_req = youtube.videos().list(
            id=list['ids'],
            part='id,snippet,statistics',
        )
    res = search_req.execute()
    return filter_video_info(res)