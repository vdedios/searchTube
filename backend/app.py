#! /usr/bin/env python3

import os
from flask import Flask, request
from flask_cors import CORS
from googleapiclient.discovery import build

api_key = os.getenv('API_KEY')
youtube = build('youtube', 'v3', developerKey=api_key)

def filter_ids(res):
    string_ids = ''
    for item in res['items']:
        string_ids += item['id']['videoId'] + ','
    if ('nextPageToken' in res.keys()):
        nextPageToken = res['nextPageToken']
    else:
        nextPageToken = ''
    list = {
        'ids': string_ids[:-1],
        'nextPageToken': nextPageToken,
    }

    return list

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
    return search_req.execute()

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})


@app.route("/api/search", methods=['GET'])
def search_controller():
    keyword = request.args.get('keyword')
    page_token = request.args.get('page')
    list = get_search_ids(keyword, page_token)
    videos = get_video_list(list)
    videos['nextPageToken'] = list['nextPageToken']
    return videos
