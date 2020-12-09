/**
 * Imports
 */
import express from 'express';
import routeFeed from './RouteFeed';
import routeDesktop from './RouteDesktop';

/**
 * Get Router object
 */
const router = express.Router();

router.use('/feed', routeFeed);
router.use('/desktop', routeDesktop);

export default router;
