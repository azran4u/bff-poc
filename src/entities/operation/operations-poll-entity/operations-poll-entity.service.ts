import { Injectable } from '@nestjs/common';
import { OperationsRepositoryService } from '../operations-repository/operations-repository.service';
import { EntityId } from '../../../model/EntityId';
import { Operation } from '../../../model/Operation';
import { PollEntityService } from '../../../utils/poll-entity/poll-entity.service';

@Injectable()
export class OperationsPollEntityService extends PollEntityService<
  Operation,
  EntityId
> {
  constructor(
    private operationsRepositoryService: OperationsRepositoryService,
  ) {
    super(operationsRepositoryService);
  }
}
