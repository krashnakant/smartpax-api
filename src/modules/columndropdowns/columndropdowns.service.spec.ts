import { Test, TestingModule } from '@nestjs/testing';
import { ColumndropdownsService } from './columndropdowns.service';

describe('ColumndropdownsService', () => {
  let service: ColumndropdownsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ColumndropdownsService],
    }).compile();

    service = module.get<ColumndropdownsService>(ColumndropdownsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
