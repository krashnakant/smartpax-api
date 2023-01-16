import { Test, TestingModule } from '@nestjs/testing';
import { ColumnvaluesService } from './columnvalues.service';

describe('ColumnvaluesService', () => {
  let service: ColumnvaluesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ColumnvaluesService],
    }).compile();

    service = module.get<ColumnvaluesService>(ColumnvaluesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
