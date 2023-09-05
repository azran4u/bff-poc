import { Test, TestingModule } from '@nestjs/testing';
import { OperationsWatchListGarbageCollectorService } from './operations-watch-list-garbage-collector.service';

describe('OperationsWatchListGarbageCollectorService', () => {
  let service: OperationsWatchListGarbageCollectorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OperationsWatchListGarbageCollectorService],
    }).compile();

    service = module.get<OperationsWatchListGarbageCollectorService>(OperationsWatchListGarbageCollectorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
