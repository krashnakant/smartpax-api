import { Test, TestingModule } from '@nestjs/testing';
import { StatusvaluesService } from './statusvalues.service';

describe('StatusvaluesService', () => {
  let service: StatusvaluesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StatusvaluesService],
    }).compile();

    service = module.get<StatusvaluesService>(StatusvaluesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
