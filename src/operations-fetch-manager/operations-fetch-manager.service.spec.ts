import { Test, TestingModule } from '@nestjs/testing';
import { OperationsFetchManagerService } from './operations-fetch-manager.service';

describe('OperationsFetchManagerService', () => {
  let service: OperationsFetchManagerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OperationsFetchManagerService],
    }).compile();

    service = module.get<OperationsFetchManagerService>(OperationsFetchManagerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
