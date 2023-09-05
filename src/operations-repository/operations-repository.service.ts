import { Injectable } from '@nestjs/common';
import { EntityRepositoryService } from '../entity-repository/entity-repository.interface';
import { Operation } from '../model/Operation';
import { EntityStatus } from '../model/EntityStatus';

@Injectable()
export class OperationsRepositoryService
  implements EntityRepositoryService<Operation>
{
  private version = 0;
  private operations: Operation[] = [];

  async getByIds(ids: string[]): Promise<Operation[]> {
    return ids
      .map((id) => this.operations.find((op) => op.id === id))
      .filter((op) => op !== undefined) as Operation[];
  }

  async getStatusByIds(ids: string[]): Promise<EntityStatus[]> {
    if (this.operations.length === 0) this.generate();
    return ids
      .map((id) => {
        const operation = this.operations.find((op) => op.id === id);
        return {
          id,
          updatedAt: operation?.updatedAt,
        };
      })
      .filter((status) => status.updatedAt !== undefined);
  }

  private generate() {
    this.addOperation();
    this.addOperation();
    this.addOperation();
    // this.removeOperation();
    // this.updateOperation();
  }

  private addOperation() {
    this.version++;
    this.operations.push({
      id: this.version.toString(),
      updatedAt: new Date().toISOString(),
      name: 'Operation ' + this.version,
    });
  }

  private removeOperation() {
    this.operations.pop();
  }

  private updateOperation() {
    this.operations[0].updatedAt = new Date().toISOString();
  }
}
