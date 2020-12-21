import { FeedItemModelSchema } from '../models/FeedItemModel';

export default class DataFeed {
  databaseSetup = () => {};

  async getFeedById(userId: number) {
    var FeedModel = FeedItemModelSchema();

    var feedResult = new FeedModel({
      user: {
        name: 'Channel Mobile Dev',
        avatar: 'https://source.unsplash.com/random/800x600'
      },
      post: {
        id: 12345,
        title: 'Example overkill desk',
        photo:
          'https://cdn.shopify.com/s/files/1/0338/5360/3885/products/embody_prd_gallery_nevi_05_2x_0a3fc5a7-d667-4f5f-88a6-1b918ef56017_1280x1280.jpg'
      }
    });

    feedResult.save((err, result) => {
      if (err) console.log(JSON.stringify(err));

      if (result) console.log(JSON.stringify(result));
    });

    console.log('DEBUG A');
  }
}
