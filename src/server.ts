/**
 * First line imports
 */
import 'reflect-metadata';

/**
 * Imports
 */
import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/Routes';
import Config from './config';
import cors from 'cors';

/**
 * Server settings
 */
const app = express();
const port = process.env.PORT || 8000;

/**
 * CORS settings
 */
const corsOptions = {
  origin: 'http://localhost:' + port
};

//app.use(cors(corsOptions));

/**
 * Parse JSON body requests
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Setup DB
 */
const mongoDB = Config.db_url;

mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on(
  'error',
  console.error.bind(console, '⚡[database]: MongoDB connection error:')
);
db.once('open', () => {
  console.log('⚡[database]: Connected to MongoDB');
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
