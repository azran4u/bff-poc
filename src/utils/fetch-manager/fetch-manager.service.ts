import { BaseEntity } from '../../model/BaseEntity';
import { PollEntityService } from '../poll-entity/poll-entity.service';
import { StoreService } from '../store/store.service';
import { WatchListService } from '../watch-list/watch-list.service';

export class FetchManagerService<T extends BaseEntity, WL> {
  constructor(
    private storeService: StoreService<T>,
    private watchListService: WatchListService<WL>,
    private pollEntityService: PollEntityService<T, WL>,
  ) {}

  async fetch() {
    const watchList = this.watchListService.getAll();
    const currentState = this.storeService.getStatus();
    const diff = await this.pollEntityService.pollEntity(
      watchList,
      currentState,
    );
    diff.upserted.forEach((op) => this.storeService.upsert(op));
    diff.removed.forEach((id) => this.storeService.remove(id));
    console.log(`diff: ${JSON.stringify(diff)}`);
    console.log(
      `operations state: ${JSON.stringify(this.storeService.getStatus())}`,
    );
  }
}
