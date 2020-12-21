import UserModel from './UserModel';
import PostModel from './PostModel';
import mongoose, { Schema } from 'mongoose';

interface FeedItemModel {
  user: UserModel;
  post: PostModel;
}

const FeedItemModelSchema = () => {
  var FeedSchema = new Schema({
    user: {
      name: {
        type: String,
        minlength: [1, 'Field must not be empty'],
        required: true
      },
      avatar: {
        type: String,
        minlength: [1, 'Field must not be empty'],
        required: true
      }
    },
    post: {
      id: Number,
      title: {
        type: String,
        minlength: [1, 'Field must not be empty'],
        required: true
      },
      photo: {
        type: String,
        minlength: [1, 'Field must not be empty'],
        required: true
      }
    }
  });

  return mongoose.model('FeedModel', FeedSchema);
};

export { FeedItemModel, FeedItemModelSchema };
