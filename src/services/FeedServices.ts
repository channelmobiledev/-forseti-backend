/**
 * Imports
 */
import { Service, Container } from 'typedi';
import { FeedDataService } from '../data/FeedDataService';

/**
 * Service methods
 */
@Service()
export default class FeedServices {
  constructor(private feedDataService: FeedDataService) {}

  async GetFeed(userId: number) {
    return await this.feedDataService.getUserFeed(userId);
  }
}
