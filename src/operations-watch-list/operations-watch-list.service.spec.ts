import { Test, TestingModule } from '@nestjs/testing';
import { OperationsWatchListService } from './operations-watch-list.service';

describe('OperationsWatchListService', () => {
  let service: OperationsWatchListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OperationsWatchListService],
    }).compile();

    service = module.get<OperationsWatchListService>(OperationsWatchListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
