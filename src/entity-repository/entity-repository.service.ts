import { EntityId } from '../model/EntityId';
import { EntityStatus } from '../model/EntityStatus';

export interface EntityRepositoryService<T> {
  getByIds(ids: EntityId[]): Promise<T[]>;
  getStatusByIds(ids: EntityId[]): Promise<EntityStatus[]>;
}
