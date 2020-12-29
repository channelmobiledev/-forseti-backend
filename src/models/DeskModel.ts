import { Service } from 'typedi';
import mongoose, { Schema } from 'mongoose';

export type PostModel = {
  id: number;
  title: string;
  photo: string;
};

@Service()
export class DeskModelService {
  private model: any;

  constructor() {
    this.init();
  }

  private init() {
    const DeskSchema = new Schema({
      _id: Schema.Types.ObjectId,
      __v: Schema.Types.Number,
      gallery: [
        {
          uri: {
            type: String,
            minlength: [1, 'Field must not be empty'],
            required: true
          }
        }
      ],
      info: [
        {
          icon: {
            type: String,
            minlength: [1, 'Field must not be empty'],
            required: true
          },
          type: {
            type: String,
            minlength: [1, 'Field must not be empty'],
            required: true
          },
          name: {
            type: String,
            minlength: [1, 'Field must not be empty'],
            required: true
          },
          link: {
            type: String,
            minlength: [1, 'Field must not be empty'],
            required: true
          }
        }
      ]
    });

    this.model = mongoose.model('DeskModel', DeskSchema);
  }

  getInstance() {
    return this.model;
  }
}
