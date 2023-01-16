import { Test, TestingModule } from '@nestjs/testing';
import { CharttypesService } from './charttypes.service';

describe('CharttypesService', () => {
  let service: CharttypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CharttypesService],
    }).compile();

    service = module.get<CharttypesService>(CharttypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
