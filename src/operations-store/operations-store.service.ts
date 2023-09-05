import { Injectable } from '@nestjs/common';
import { EntityId } from '../model/EntityId';
import { Operation } from '../model/Operation';
import { EntityStatus } from '../model/EntityStatus';

@Injectable()
export class OperationsStoreService {
  private operations: Map<EntityId, Operation>;

  constructor() {
    this.operations = new Map<EntityId, Operation>();
  }

  upsert(operation: Operation): void {
    this.operations.set(operation.id, operation);
  }

  remove(id: EntityId): void {
    this.operations.delete(id);
  }

  getByIds(ids: EntityId[]): Operation[] {
    return ids
      .map((id) => this.operations.get(id))
      .filter((op) => op !== undefined) as Operation[];
  }

  getStatus(): EntityStatus[] {
    return Array.from(this.operations.values()).map((op) => ({
      id: op.id,
      updatedAt: op.updatedAt,
    }));
  }
}
