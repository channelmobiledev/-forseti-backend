import express from 'express';
import routeFeed from './RouteFeed';
import routeDesktop from './RouteDesktop';
import routeUsers from './users.route';

const router = express.Router();

router.use('/feed', routeFeed);
router.use('/desktop', routeDesktop);
router.use('/users', routeUsers);

export default router;
