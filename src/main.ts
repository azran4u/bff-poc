import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { OperationsFetchManagerCronJobService } from './operations-fetch-manager-cron-job/operations-fetch-manager-cron-job.service';
import { OperationsWatchListGarbageCollectorService } from './operations-watch-list-garbage-collector/operations-watch-list-garbage-collector.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const operationsFetchManagerCronJobService = app.get(
    OperationsFetchManagerCronJobService,
  );
  operationsFetchManagerCronJobService.start();

  const operationsWatchListGarbageCollectorService = app.get(
    OperationsWatchListGarbageCollectorService,
  );
  operationsWatchListGarbageCollectorService.start();

  await app.listen(3000);
}
bootstrap();
