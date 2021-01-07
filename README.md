# Forseti Backend

Backend for the [Forseti Mobile App](https://github.com/channelmobiledev/forseti). Provides the App with all the necessary endpoints to make it work!

## 🛠️ Install

Software requirements

- [Node](https://nodejs.org/en/download/)
- [Docker](https://www.docker.com/)

Get a MongoDB docker image

- [MongoDB docker image](https://hub.docker.com/_/mongo)

Install project dependency packages

```bash
npm install
```

Create a `config.ts` file in the root of the project:

```ts
export default class Config {
  static db_url: string = 'mongodb://172.17.0.2/<name of the database>';
  static secret: string = '<Generate your secret here>';
}
```

## 🏃‍♀️ Run

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
