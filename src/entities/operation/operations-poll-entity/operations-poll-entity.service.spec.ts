import { Test, TestingModule } from '@nestjs/testing';
import { OperationsPollEntityService } from './operations-poll-entity.service';

describe('OperationsPollEntityService', () => {
  let service: OperationsPollEntityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OperationsPollEntityService],
    }).compile();

    service = module.get<OperationsPollEntityService>(OperationsPollEntityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
