# Lucky Minute Frontend

## Local Development Environment

The backend can be run in a local docker environment via the provided docker-compose.yaml file. This environment uses the docker
container `asia.gcr.io/roulette-176221/tgen:latest`.

### Prerequisites

- **Docker must be installed.**
- To access the container at google container repository, the **authentication parameters of Docker
must be configured**. A guide on how to configure is available here: <https://cloud.google.com/container-registry/docs/advanced-authentication>
- The backend routes incoming requests with 'app' subdomains to the static content handler. **You need to set the subdomain in
the etc/hosts file** (or the hosts file on Windows machines), by adding a new entry for the 'app' subdomain: `127.0.0.1	app.localhost`

### Static Content

The contents of the ./build directory are used in the dev server through a docker volume mount.
The database contents are not persisted. (We can decide to use a volume for that as well if persisting changes is desired).

### Workflow

Run the server with:

`docker-compose -f ./docker-compose.yaml up`

Stop the server with:

`docker-compose -f ./docker-compose.yaml down`

If the hosts file is properly set, you can access the dev page at:

`http://app.localhost:8080`

The server doesn't force the browser to reload automatically, it needs to be refreshed after code changes.
That makes the dev process something like:

1. Edit the code
2. Build (npm run build)
3. Refresh at `http://app.localhost:8080`

### Controlling Game Sessions in DEV

Game sessions are controlled by the `POST /api/v1/games:settle` endpoint. This endpoint requires the `Authorization` header
to be present with a correct key. In the docker-compose.yaml file it's set by the API_KEY environment variable.

The production deployment uses a scheduler for resetting / starting a new game every minute. This component doesn't
exist on the local machine. There is an endpoint that controls the game cycle. It triggers the settlements of the
unsettled winnings of the previous sessions and creates a new game session. Note, that game sessions only last for 60 seconds
even if this endpoint is not called. It is not possible to place a bet on a game session after 50 seconds.