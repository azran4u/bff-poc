import { Injectable } from '@nestjs/common';
import { Operation } from '../../../model/Operation';
import { StoreService } from '../../../utils/store/store.service';

@Injectable()
export class OperationsStoreService extends StoreService<Operation> {
  constructor() {
    super();
  }
}
