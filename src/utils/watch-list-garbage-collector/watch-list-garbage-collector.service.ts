import { WatchListService } from '../watch-list/watch-list.service';

export class WatchListGarbageCollectorService<T> {
  constructor(private watchListService: WatchListService<T>) {}

  interval() {
    return 10000;
  }

  start() {
    setInterval(() => {
      console.log(`watch list state: ${this.watchListService.getAll()}`);
      const date = new Date();
      date.setMinutes(date.getMinutes() - 1);
      this.watchListService.removeOlderThan(date);
    }, this.interval());
  }
}
