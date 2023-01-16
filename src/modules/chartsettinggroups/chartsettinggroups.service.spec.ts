import { Test, TestingModule } from '@nestjs/testing';
import { ChartsettinggroupsService } from './chartsettinggroups.service';

describe('ChartsettinggroupsService', () => {
  let service: ChartsettinggroupsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChartsettinggroupsService],
    }).compile();

    service = module.get<ChartsettinggroupsService>(ChartsettinggroupsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
