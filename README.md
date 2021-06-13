# searchTube 📺
Search and display the first 200 YouTube videos that match a certain keyword.

## Brief description

This app is composed of two parts:

1. **Frontend :** Made with `React + Typescript`. Search and display video
list that matches search query.
2. **Backend :** Made with `Flask + Google-API` Python tools. Fetch from
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
    docker-compse up
```

3. Once `docker-compose` finishes setting up all service
(this could take around 2 minutes, depending on your machine),
open a browser and navigate to `http://localhost:3000`

### Second option

You can also try to run both services independently:

1. **Frontend :** Go to `/webapp` and run `yarn && yarn start`
2. **Backend :** Go to `/backend` and run `pip install -r requirements.txt
&& export API_KEY='your_api_key' && flask run --host=0.0.0.0`
3. Navigate to `http://localhost:3000`
