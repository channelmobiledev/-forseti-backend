import { Service } from 'typedi';
import { DeskDataService } from '../data/DeskDataService';

@Service()
export default class PostService {
  constructor(private deskDataService: DeskDataService) {}

  async getDeskDetails(userId: number) {
    return await this.deskDataService.getUserDesk(userId);
  }
}
