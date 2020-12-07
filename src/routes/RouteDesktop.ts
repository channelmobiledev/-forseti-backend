/**
 * Imports
 */
import express from 'express';
import FeedItemModel from '../models/FeedItemModel';

/**
 * Get Router object
 */
const router = express.Router();

const desktopGetDeskDetails = (req: any, res: any) => {
  const deskId = req.body.id;

  if (!deskId) {
    return res.status(400).send({
      error: 'deskId: value missing'
    });
  }

  // TODO Return the desk data

  res.json({ example: 'hello' });
  console.log('GET /desktop/ success');
};

/**
 * Router endpoints
 */
router.post('/', desktopGetDeskDetails);

export default router;
