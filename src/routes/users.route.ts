import Container from 'typedi';
import express from 'express';
import UserServices from '../services/user.services';

const router = express.Router();
const userServices = Container.get(UserServices);

const signupUser = (req: any, res: any, next: any) => {
  userServices.createUser(req, res);
};

const signinUser = (req: any, res: any, next: any) => {
  userServices.loginUser(req, res);
};

router.post(
  '/signup',
  [userServices.checkDuplicateUsername, userServices.checkDuplicateEmail],
  signupUser
);

router.get('/signin', signinUser);
// router.get('/signin', [userServices.checkUsernameExists], signinUser);

export default router;
