import { Injectable } from '@nestjs/common';
import { OperationsStoreService } from '../operations-store/operations-store.service';
import { OperationsWatchListService } from '../operations-watch-list/operations-watch-list.service';
import { OperationsFetchManagerService } from '../operations-fetch-manager/operations-fetch-manager.service';
import { EntityId } from '../../../model/EntityId';
import { Operation } from '../../../model/Operation';

@Injectable()
export class OperationsRequestManagerService {
  constructor(
    private operationsStoreService: OperationsStoreService,
    private operationsWatchListService: OperationsWatchListService,
    private operationsFetchManagerService: OperationsFetchManagerService,
  ) {}

  async getByIds(ids: EntityId[]): Promise<Operation[]> {
    this.operationsWatchListService.update(ids);
    let operations = this.operationsStoreService.getByIds(ids);
    const hasMissingIds = operations.length !== ids.length;
    if (hasMissingIds) {
      const missingIds = ids.filter(
        (id) => operations.find((op) => op.id === id) === undefined,
      );
      await this.operationsFetchManagerService.fetch();
      const updatedResult = this.operationsStoreService.getByIds(missingIds);
      operations = [...operations, ...updatedResult];
    }
    return operations;
  }
}
