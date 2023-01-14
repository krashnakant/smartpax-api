import { Test, TestingModule } from '@nestjs/testing';
import { DefaultcolumnsService } from './defaultcolumns.service';

describe('DefaultcolumnsService', () => {
  let service: DefaultcolumnsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DefaultcolumnsService],
    }).compile();

    service = module.get<DefaultcolumnsService>(DefaultcolumnsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
