import { Injectable } from '@nestjs/common';
import { OperationsFetchManagerService } from '../operations-fetch-manager/operations-fetch-manager.service';

@Injectable()
export class OperationsFetchManagerCronJobService {
  constructor(
    private operationsFetchManagerService: OperationsFetchManagerService,
  ) {}

  start() {
    setInterval(async () => {
      await this.operationsFetchManagerService.fetchOperations();
    }, 5000);
  }
}
