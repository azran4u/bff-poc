import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { OperationsRepositoryService } from './entities/operation/operations-repository/operations-repository.service';
import { OperationsWatchListService } from './entities/operation/operations-watch-list/operations-watch-list.service';
import { OperationsWatchListGarbageCollectorService } from './entities/operation/operations-watch-list-garbage-collector/operations-watch-list-garbage-collector.service';
import { OperationsStoreService } from './entities/operation/operations-store/operations-store.service';
import { OperationsFetchManagerService } from './entities/operation/operations-fetch-manager/operations-fetch-manager.service';
import { OperationsPollEntityService } from './entities/operation/operations-poll-entity/operations-poll-entity.service';
import { OperationsFetchManagerCronJobService } from './entities/operation/operations-fetch-manager-cron-job/operations-fetch-manager-cron-job.service';
import { OperationsRequestManagerService } from './entities/operation/operations-request-manager/operations-request-manager.service';
import { OperationsController } from './entities/operation/operations-controller/operations.controller';
import { WatchListGarbageCollectorService } from './utils/watch-list-garbage-collector/watch-list-garbage-collector.service';

@Module({
  imports: [],
  controllers: [AppController, OperationsController],
  providers: [
    OperationsRepositoryService,
    OperationsWatchListService,
    OperationsWatchListGarbageCollectorService,
    OperationsStoreService,
    OperationsFetchManagerService,
    OperationsPollEntityService,
    OperationsFetchManagerCronJobService,
    OperationsRequestManagerService,
    WatchListGarbageCollectorService,
  ],
})
export class AppModule {}
