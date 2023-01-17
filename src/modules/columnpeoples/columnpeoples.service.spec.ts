import { Test, TestingModule } from '@nestjs/testing';
import { ColumnpeoplesService } from './columnpeoples.service';

describe('ColumnpeoplesService', () => {
  let service: ColumnpeoplesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ColumnpeoplesService],
    }).compile();

    service = module.get<ColumnpeoplesService>(ColumnpeoplesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
