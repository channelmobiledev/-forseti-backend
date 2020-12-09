import express from 'express';
import routes from './routes/Routes';

const app = express();
const port = process.env.PORT || 8000;

/**
 * Parse JSON body requests
 */
app.use(express.json());

/**
 * Route methods
 */
app.use(routes);

/**
 * API methods
 */
const handleErrors = (err: any) => {
  if (err) {
    return console.error(err);
  }
};

/**
 * Server startup
 */
app.on('error', handleErrors);
app.listen(port, () => {
  console.log(`⚡[server]: Server is running at http://localhost:${port}`);
});

app;
