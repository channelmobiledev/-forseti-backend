/**
 * Imports
 */
import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/Routes';
import Config from './config';

/**
 * Server settings
 */
const app = express();
const port = process.env.PORT || 8000;

/**
 * Parse JSON body requests
 */
app.use(express.json());

/**
 * Setup DB
 */
const mongoDB = Config.db_url;

console.log('DEBUG mongoDB: ' + mongoDB);

mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('MongoDB: Connected to DB');
});

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
