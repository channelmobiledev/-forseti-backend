import PostModel from './PostModel';
import UserModel from './UserModel';

export default interface FeedItemModel {
  user: UserModel;
  post: PostModel;
}
