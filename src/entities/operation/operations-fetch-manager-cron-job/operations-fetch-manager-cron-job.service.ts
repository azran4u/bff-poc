import { Injectable } from '@nestjs/common';
import { OperationsFetchManagerService } from '../operations-fetch-manager/operations-fetch-manager.service';
import { Operation } from '../../../model/Operation';
import { EntityId } from '../../../model/EntityId';
import { FetchManagerCronJobService } from '../../../utils/fetch-manager-cron-job/fetch-manager-cron-job.service';

@Injectable()
export class OperationsFetchManagerCronJobService extends FetchManagerCronJobService<
  Operation,
  EntityId
> {
  constructor(
    private operationsFetchManagerService: OperationsFetchManagerService,
  ) {
    super(operationsFetchManagerService);
  }
}
