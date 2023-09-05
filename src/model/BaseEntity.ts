import { EntityId } from "./EntityId";

export interface BaseEntity {
    id: EntityId;
    updatedAt: string;
}