# Forseti Backend

Backend for the [Forseti Mobile App](https://github.com/channelmobiledev/forseti). Provides the App with all the necessary endpoints to make it work!

## Install

Software requirements

- [Node](https://nodejs.org/en/download/)
- [Docker](https://www.docker.com/)

Get a MongoDB docker image

- [MongoDB docker image](https://hub.docker.com/_/mongo)

Install project dependency packages

```bash
npm install
```

## Run

Docker

```bash
sudo docker start <id of the container>
```

Server

```bash
npm start
```

If your console shows

```bash
⚡[server]: Server is running at http://localhost:8000
⚡[database]: Connected to MongoDB
```

You're running the backend correctly! 🎉
