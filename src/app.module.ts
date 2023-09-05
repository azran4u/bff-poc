import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OperationsRepositoryService } from './operations-repository/operations-repository.service';
import { OperationsWatchListService } from './operations-watch-list/operations-watch-list.service';
import { OperationsWatchListGarbageCollectorService } from './operations-watch-list-garbage-collector/operations-watch-list-garbage-collector.service';
import { OperationsStoreService } from './operations-store/operations-store.service';
import { OperationsFetchManagerService } from './operations-fetch-manager/operations-fetch-manager.service';
import { OperationsPollEntityService } from './operations-poll-entity/operations-poll-entity.service';
import { OperationsFetchManagerCronJobService } from './operations-fetch-manager-cron-job/operations-fetch-manager-cron-job.service';
import { OperationsRequestManagerService } from './operations-request-manager/operations-request-manager.service';
import { OperationsController } from './operations-controller/operations.controller';

@Module({
  imports: [],
  controllers: [AppController, OperationsController],
  providers: [AppService, OperationsRepositoryService, OperationsWatchListService, OperationsWatchListGarbageCollectorService, OperationsStoreService, OperationsFetchManagerService, OperationsPollEntityService, OperationsFetchManagerCronJobService, OperationsRequestManagerService],
})
export class AppModule {}
