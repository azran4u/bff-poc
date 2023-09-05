import { Injectable } from '@nestjs/common';
import { EntityRepositoryService } from '../entity-repository/entity-repository.interface';
import { EntityStatus } from '../../model/EntityStatus';
import { EntityStatusDiff } from '../../model/EntityStatusDiff';

export class PollEntityService<T, WL> {
  constructor(private repositoryService: EntityRepositoryService<T, WL>) {}

  async pollEntity(
    watchList: WL[],
    currentState: EntityStatus[],
  ): Promise<EntityStatusDiff<T>> {
    const status = await this.repositoryService.getStatusByWatchList(watchList);

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

    const upserted = await this.repositoryService.getByIds(
      [...added, ...updated].map((s) => s.id),
    );

    return {
      upserted,
      removed,
    };
  }
}
