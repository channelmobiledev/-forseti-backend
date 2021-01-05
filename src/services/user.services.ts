import { Service } from 'typedi';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User, { IUser } from '../models/user.model';
import config from '../config';

@Service()
export default class UserServices {
  async createUser(req: any, res: any) {
    const user: IUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      avatar: req.body.avatar
    });

    await user.save((err: any, user: any) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      console.log('API /users/signup -> created');

      res.send({ message: 'User was registered successfully!' });
    });
  }

  async loginUser(req: any, res: any) {
    await User.findOne({
      username: req.body.username
    }).exec((err: any, user: any) => {
      console.log('DEBUG login');
      console.log(
        'DEBUG req.body.username: ' + JSON.stringify(req.body.username)
      );

      if (err) {
        console.log('DEBUG login -> error');

        res.status(500).send({ message: err });
        return;
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: 'Invalid Password!'
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        avatar: user.avatar,
        accessToken: token
      });
    });
  }

  verifyToken(req: any, res: any, next: any) {
    let token = req.headers['x-access-token'];

    if (!token) {
      return res.status(403).send({ message: 'No token provided!' });
    }

    jwt.verify(token, config.secret, (err: any, decoded: any) => {
      if (err) {
        return res.status(401).send({ message: 'Unauthorized!' });
      }
      req.userId = decoded.id;
      next();
    });
  }

  async checkUsernameExists(req: any, res: any, next: any) {
    await User.findOne({ username: req.body.username }).exec(
      (err: any, user: any) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        console.log('DEBUG user exists? ' + JSON.stringify(user));
        console.log(
          'DEBUG req.body.username? ' + JSON.stringify(req.body.username)
        );

        if (!user) {
          res.status(404).send({ message: 'Failed! Username does not exist!' });
          return;
        }

        next();
      }
    );
  }

  async checkDuplicateUsername(req: any, res: any, next: any) {
    await User.findOne({ username: req.body.username }).exec(
      (err: any, user: any) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        if (user) {
          res
            .status(400)
            .send({ message: 'Failed! Username is already in use!' });
          return;
        }

        next();
      }
    );
  }

  async checkDuplicateEmail(req: any, res: any, next: any) {
    await User.findOne({ email: req.body.email }).exec(
      (err: any, user: any) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        if (user) {
          res.status(400).send({ message: 'Failed! Email is already in use!' });
          return;
        }

        next();
      }
    );
  }
}
