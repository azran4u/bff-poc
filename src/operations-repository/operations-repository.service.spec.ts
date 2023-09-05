import { Test, TestingModule } from '@nestjs/testing';
import { OperationsRepositoryService } from './operations-repository.service';

describe('OperationsRepositoryService', () => {
  let service: OperationsRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OperationsRepositoryService],
    }).compile();

    service = module.get<OperationsRepositoryService>(
      OperationsRepositoryService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return value', async () => {
    const ids = ['1', '2'];
    const res = await service.getStatusByIds(ids);
    expect(res.map((x) => x.id)).toEqual(ids);
  });
});
