import Container from 'typedi';
import express from 'express';
import FeedServices from '../services/FeedServices';

const router = express.Router();

const getFeedData = async (req: any, res: any) => {
  const feedServices = Container.get(FeedServices);

  const feed = await feedServices.GetFeed(-1);

  res.json(feed);

  console.log('GET /feed/ success');
};

router.get('/', getFeedData);

export default router;
