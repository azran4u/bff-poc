import { Injectable } from '@nestjs/common';
import { OperationsRepositoryService } from '../operations-repository/operations-repository.service';
import { EntityId } from '../model/EntityId';
import { EntityStatus } from '../model/EntityStatus';
import { EntityStatusDiff } from '../model/diff';
import { Operation } from '../model/Operation';

@Injectable()
export class OperationsPollEntityService {
  constructor(
    private operationsRepositoryService: OperationsRepositoryService,
  ) {}

  async pollEntity(
    watchList: EntityId[],
    currentState: EntityStatus[],
  ): Promise<EntityStatusDiff<Operation>> {
    const status =
      await this.operationsRepositoryService.getStatusByIds(watchList);

    const updated = status.filter(
      (s) =>
        currentState.find((cs) => cs.id === s.id)?.updatedAt !== s.updatedAt,
    );

    const removed = currentState
      .filter((cs) => status.find((s) => s.id === cs.id) === undefined)
      .map((cs) => cs.id);

    const added = status.filter(
      (s) => currentState.find((cs) => cs.id === s.id) === undefined,
    );

    const upserted = await this.operationsRepositoryService.getByIds(
      [...added, ...updated].map((s) => s.id),
    );

    return {
      upserted,
      removed,
    };
  }
}
