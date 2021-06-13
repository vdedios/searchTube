# searchTube 📺
Search and display the first 200 YouTube videos that match a certain keyword.

## Brief description

This app is composed of two services:

1. **Frontend :** Made with `React + Typescript`. Search and display video
list that matches search query pulled from backend.
2. **Backend :** Made with `Flask + Google-API` Python tools. Fetches data from
YouTube API and manipulate it to return desired results.

## Run it locally

### First option

The easiest way for running this project is to use the provided docker setup:

0. First of all, you need to have `docker` and `docker-compose`
installed.

1. Then, go to `./backend` and add your YouTube `API_KEY` into the
`template.config.env` file.

2. Then, just run, from the root of the project:

```bash
    docker-compose up
```

3. Once `docker-compose` finishes setting up all services
(this could take around 2 minutes, depending on your machine),
navigate to [http://localhost:3000](http://localhost:3000)

### Second option

You can also try to run both services independently with their
production servers:

1. **Frontend :** Go to `/webapp` and run `yarn && yarn start`
2. **Backend :** Go to `/backend` and run `pip install -r requirements.txt
&& export API_KEY='your_api_key' && flask run --host=0.0.0.0`
3. Navigate to `http://localhost:3000`
