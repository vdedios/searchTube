def filter_ids(res):
    string_ids = ''
    for item in res['items']:
        string_ids += item['id']['videoId'] + ','
    nextPageToken = res['nextPageToken'] if 'nextPageToken' in res.keys() else ''
    list = {
        'ids': string_ids[:-1],
        'nextPageToken': nextPageToken,
    }
    return list

def filter_video_info(res):
    videos = []
    for item in res['items']:
        videos.append(
            {
                'title': item['snippet']['title'],
                'channelTitle': item['snippet']['channelTitle'],
                'viewCount': item['statistics']['viewCount'],
                'description': item['snippet']['description'],
                'thumbnail': item['snippet']['thumbnails']['medium']['url'],
                'videoUrl': 'https://www.youtube.com/watch?v=' + item['id'],
                'publishedAt': item['snippet']['publishedAt'],

            }
        )
    return videos
