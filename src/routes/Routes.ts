/**
 * Imports
 */
import express from 'express';
import routesFeed from './RoutesFeed';
import routesDesktop from './RoutesDesktop';

/**
 * Get Router object
 */
const router = express.Router();

router.use('/feed', routesFeed);
//router.use('/desktops', routesDesktop);

export default router;
