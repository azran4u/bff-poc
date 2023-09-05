import { FetchManagerService } from '../fetch-manager/fetch-manager.service';
import { BaseEntity } from '../../model/BaseEntity';

export class FetchManagerCronJobService<T extends BaseEntity, WL> {
  constructor(private fetchManagerService: FetchManagerService<T, WL>) {}

  interval(): number {
    return 5000;
  }

  start() {
    setInterval(async () => {
      await this.fetchManagerService.fetch();
    }, this.interval());
  }
}
