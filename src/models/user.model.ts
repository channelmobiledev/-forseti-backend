import { Document, Schema, model, Model } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  avatar: string;
}

const UserSchema: Schema = new Schema({
  username: {
    type: String,
    minlength: [1, 'Field must not be empty'],
    required: true
  },
  email: {
    type: String,
    minlength: [1, 'Field must not be empty'],
    required: true
  },
  password: {
    type: String,
    minlength: [1, 'Field must not be empty'],
    required: true
  },
  avatar: {
    type: String,
    minlength: [1, 'Field must not be empty'],
    required: true
  }
});

const User: Model<IUser> = model('User', UserSchema);

export default User;
