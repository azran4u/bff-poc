import { Test, TestingModule } from '@nestjs/testing';
import { OperationsStoreService } from './operations-store.service';

describe('OperationsStoreService', () => {
  let service: OperationsStoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OperationsStoreService],
    }).compile();

    service = module.get<OperationsStoreService>(OperationsStoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
