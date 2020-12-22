import mongoose, { Model } from 'mongoose';
import { FeedItemModel, FeedItemModelSchema } from '../models/FeedItemModel';

export default class DataFeed {
  feedModel: any;

  constructor() {
    this.feedModel = FeedItemModelSchema();
  }

  async getFeedById(userId: number) {
    return await this.feedModel.find({});

    // await FeedModel.find({}, (err, feedModel) => {
    //   if (err) {
    //     // TODO Implement error handling
    //     console.log(
    //       'DEBUG Error in getting feed data from db: ' + JSON.stringify(err)
    //     );
    //   }

    //   if (feedModel) {
    //     console.log('DEBUG Got feed models: ' + JSON.stringify(feedModel));
    //     return feedModel;
    //   }
    // });

    // var feedResult = new FeedModel({
    //   user: {
    //     name: 'Channel Mobile Dev',
    //     avatar: 'https://source.unsplash.com/random/800x600'
    //   },
    //   post: {
    //     id: 12345,
    //     title: 'Example overkill desk',
    //     photo:
    //       'https://cdn.shopify.com/s/files/1/0338/5360/3885/products/embody_prd_gallery_nevi_05_2x_0a3fc5a7-d667-4f5f-88a6-1b918ef56017_1280x1280.jpg'
    //   }
    // });

    // feedResult.save((err, result) => {
    //   if (err)
    //     console.log('DEBUG Error in creating db entry: ' + JSON.stringify(err));

    //   if (result) {
    //     console.log(
    //       'DEBUG Success in creating db entry: ' + JSON.stringify(result)
    //     );

    //     return result;
    //   }
    // });

    // TODO Hardcoded response
    // return [
    //   {
    //     user: {
    //       name: 'Channel Mobile Dev',
    //       avatar: 'https://source.unsplash.com/random/800x600'
    //     },
    //     post: {
    //       id: 12345,
    //       title: 'Example overkill desk',
    //       photo:
    //         'https://cdn.shopify.com/s/files/1/0338/5360/3885/products/embody_prd_gallery_nevi_05_2x_0a3fc5a7-d667-4f5f-88a6-1b918ef56017_1280x1280.jpg'
    //     }
    //   }
    // ];
  }
}
