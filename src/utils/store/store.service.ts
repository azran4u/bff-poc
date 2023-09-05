import { BaseEntity } from '../../model/BaseEntity';
import { EntityId } from '../../model/EntityId';
import { EntityStatus } from '../../model/EntityStatus';

export class StoreService<T extends BaseEntity> {
  private values: Map<EntityId, T>;

  constructor() {
    this.values = new Map<EntityId, T>();
  }

  upsert(value: T): void {
    this.values.set(value.id, value);
  }

  remove(id: EntityId): void {
    this.values.delete(id);
  }

  getByIds(ids: EntityId[]): T[] {
    return ids
      .map((id) => this.values.get(id))
      .filter((op) => op !== undefined) as T[];
  }

  getStatus(): EntityStatus[] {
    return Array.from(this.values.values()).map((op) => ({
      id: op.id,
      updatedAt: op.updatedAt,
    }));
  }
}
