import { Injectable } from '@nestjs/common';
import { OperationsWatchListService } from '../operations-watch-list/operations-watch-list.service';
import { EntityId } from '../../../model/EntityId';
import { WatchListGarbageCollectorService } from '../../../utils/watch-list-garbage-collector/watch-list-garbage-collector.service';

@Injectable()
export class OperationsWatchListGarbageCollectorService extends WatchListGarbageCollectorService<EntityId> {
  constructor(private operationsWatchListService: OperationsWatchListService) {
    super(operationsWatchListService);
  }

  interval(): number {
    return 5000;
  }
}
