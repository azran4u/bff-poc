import { Injectable } from '@nestjs/common';
import { OperationsStoreService } from '../operations-store/operations-store.service';
import { OperationsWatchListService } from '../operations-watch-list/operations-watch-list.service';
import { OperationsPollEntityService } from '../operations-poll-entity/operations-poll-entity.service';

@Injectable()
export class OperationsFetchManagerService {
  constructor(
    private operationsStoreService: OperationsStoreService,
    private operationsWatchListService: OperationsWatchListService,
    private operationsPollEntityService: OperationsPollEntityService,
  ) {}

  async fetchOperations() {
    const watchList = this.operationsWatchListService.getAll();
    const currentState = this.operationsStoreService.getStatus();
    const diff = await this.operationsPollEntityService.pollEntity(
      watchList,
      currentState,
    );
    diff.upserted.forEach((op) => this.operationsStoreService.upsert(op));
    diff.removed.forEach((id) => this.operationsStoreService.remove(id));
    console.log(`diff: ${JSON.stringify(diff)}`);
    console.log(
      `operations state: ${JSON.stringify(
        this.operationsStoreService.getStatus(),
      )}`,
    );
  }
}
