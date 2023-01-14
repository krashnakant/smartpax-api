import { Test, TestingModule } from '@nestjs/testing';
import { ColumnpeopleService } from './columnpeople.service';

describe('ColumnpeopleService', () => {
  let service: ColumnpeopleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ColumnpeopleService],
    }).compile();

    service = module.get<ColumnpeopleService>(ColumnpeopleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
