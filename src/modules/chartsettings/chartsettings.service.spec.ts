import { Test, TestingModule } from '@nestjs/testing';
import { ChartsettingsService } from './chartsettings.service';

describe('ChartsettingsService', () => {
  let service: ChartsettingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChartsettingsService],
    }).compile();

    service = module.get<ChartsettingsService>(ChartsettingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
