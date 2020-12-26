import { Service } from 'typedi';
import { FeedModelService } from '../models/FeedItemModel';

@Service()
export class FeedDataService {
  constructor(private feedModel: FeedModelService) {}

  async getUserFeed(userId: number) {
    return await this.feedModel.getInstance().find({});
  }
}
