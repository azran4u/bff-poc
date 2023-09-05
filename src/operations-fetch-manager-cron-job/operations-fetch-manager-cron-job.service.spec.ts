import { Test, TestingModule } from '@nestjs/testing';
import { OperationsFetchManagerCronJobService } from './operations-fetch-manager-cron-job.service';

describe('OperationsFetchManagerCronJobService', () => {
  let service: OperationsFetchManagerCronJobService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OperationsFetchManagerCronJobService],
    }).compile();

    service = module.get<OperationsFetchManagerCronJobService>(OperationsFetchManagerCronJobService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
