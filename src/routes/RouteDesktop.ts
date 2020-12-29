import Container from 'typedi';
import express from 'express';
import PostService from '../services/PostService';

const router = express.Router();

const UserPostService = async (req: any, res: any) => {
  const deskId = req.body.id;

  if (!deskId) {
    return res.status(400).send({
      error: 'deskId: value missing'
    });
  }

  const postService = Container.get(PostService);

  const post = await postService.getDeskDetails(-1);

  res.json(post);

  console.log('GET /desktop/ success');
};

router.post('/', UserPostService);

export default router;
