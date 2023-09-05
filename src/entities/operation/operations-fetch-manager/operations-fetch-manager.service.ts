import { Injectable } from '@nestjs/common';
import { OperationsStoreService } from '../operations-store/operations-store.service';
import { OperationsWatchListService } from '../operations-watch-list/operations-watch-list.service';
import { OperationsPollEntityService } from '../operations-poll-entity/operations-poll-entity.service';
import { EntityId } from '../../../model/EntityId';
import { FetchManagerService } from '../../../utils/fetch-manager/fetch-manager.service';
import { Operation } from '../../../model/Operation';

@Injectable()
export class OperationsFetchManagerService extends FetchManagerService<
  Operation,
  EntityId
> {
  constructor(
    private operationsStoreService: OperationsStoreService,
    private operationsWatchListService: OperationsWatchListService,
    private operationsPollEntityService: OperationsPollEntityService,
  ) {
    super(
      operationsStoreService,
      operationsWatchListService,
      operationsPollEntityService,
    );
  }
}
