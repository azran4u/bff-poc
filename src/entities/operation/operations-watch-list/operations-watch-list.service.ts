import { Injectable } from '@nestjs/common';
import { EntityId } from '../../../model/EntityId';
import { WatchListService } from '../../../utils/watch-list/watch-list.service';

@Injectable()
export class OperationsWatchListService extends WatchListService<EntityId> {
  constructor() {
    super();
  }

  id(value: string): string {
    return value;
  }
}
