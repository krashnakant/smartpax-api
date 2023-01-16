import { Test, TestingModule } from '@nestjs/testing';
import { ChartcategorysService } from './chartcategorys.service';

describe('ChartcategorysService', () => {
  let service: ChartcategorysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChartcategorysService],
    }).compile();

    service = module.get<ChartcategorysService>(ChartcategorysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
