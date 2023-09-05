import { Body, Controller, Post } from '@nestjs/common';
import { OperationsRequestManagerService } from '../operations-request-manager/operations-request-manager.service';
import { Operation } from '../../../model/Operation';

interface ListOfIdsDto {
  ids: string[];
}

@Controller('operations')
export class OperationsController {
  constructor(
    private operationsRequestManagerService: OperationsRequestManagerService,
  ) {}

  @Post()
  async getByIds(@Body() ids: ListOfIdsDto): Promise<Operation[]> {
    return this.operationsRequestManagerService.getByIds(ids.ids);
  }
}
