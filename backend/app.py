#! /usr/bin/env python3

from flask import Flask, request
from flask_cors import CORS

from app_service import get_search_ids, get_video_list

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route("/api/search", methods=['GET'])
def search_controller():
    keyword = request.args.get('keyword')
    page_token = request.args.get('page')
    try:
        list = get_search_ids(keyword, page_token)
        videos = get_video_list(list)
        return {
            'videos': videos,
            'nextPageToken': list['nextPageToken']
        }
    except Exception as e:
        return {
            'errCode': str(e)
        }
