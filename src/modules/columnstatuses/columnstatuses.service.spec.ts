import { Test, TestingModule } from '@nestjs/testing';
import { ColumnstatusesService } from './columnstatuses.service';

describe('ColumnstatusesService', () => {
  let service: ColumnstatusesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ColumnstatusesService],
    }).compile();

    service = module.get<ColumnstatusesService>(ColumnstatusesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
