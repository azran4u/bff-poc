import { Test, TestingModule } from '@nestjs/testing';
import { OperationsRequestManagerService } from './operations-request-manager.service';

describe('OperationsRequestManagerService', () => {
  let service: OperationsRequestManagerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OperationsRequestManagerService],
    }).compile();

    service = module.get<OperationsRequestManagerService>(OperationsRequestManagerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
