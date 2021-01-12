import { Service } from 'typedi';
import { DeskModelService } from '../models/DeskModel';

@Service()
export class DeskDataService {
  constructor(private deskModel: DeskModelService) {}

  async getUserDesk(userId: number) {
    return await this.deskModel.getInstance().findOne({});
  }
}
