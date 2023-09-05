import { EntityId } from '../../model/EntityId';
import { EntityStatus } from '../../model/EntityStatus';

export interface EntityRepositoryService<T, WL> {
  getByIds(ids: EntityId[]): Promise<T[]>;
  getStatusByWatchList(wl: WL[]): Promise<EntityStatus[]>;
}
