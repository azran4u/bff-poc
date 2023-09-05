import { EntityId } from './EntityId';

export interface EntityStatusDiff<T> {
  upserted: T[];
  removed: EntityId[];
}
