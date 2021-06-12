# searchTube
A minimalistic solution for finding YouTube videos

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
2. Then, go to `./backend` and add your YouTube `API_KEY` into the
`template.config.env` file.
3. **Backend :** Go to `/backend` and run `pip install -r requirements.txt
&& flask run --host=0.0.0.0`
4. Navigate to `http://localhost:3000`
