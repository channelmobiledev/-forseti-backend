import DataFeed from '../data/DataFeed';

export default class FeedServices {
  dataFeed: DataFeed;

  constructor() {
    this.dataFeed = new DataFeed();
  }

  public async GetFeed(userId: number) {
    return await this.dataFeed.getFeedById(userId);
  }
}
