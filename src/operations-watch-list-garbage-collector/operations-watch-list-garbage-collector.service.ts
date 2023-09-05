import { Injectable } from '@nestjs/common';
import { OperationsWatchListService } from '../operations-watch-list/operations-watch-list.service';

@Injectable()
export class OperationsWatchListGarbageCollectorService {
  constructor(private operationsWatchListService: OperationsWatchListService) {}

  start() {
    setInterval(() => {
      console.log(
        `watch list state: ${this.operationsWatchListService.getAll()}`,
      );
      const date = new Date();
      date.setMinutes(date.getMinutes() - 1);
      this.operationsWatchListService.removeOlderThan(date);
    }, 10000);
  }
}
