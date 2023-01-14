import { Test, TestingModule } from '@nestjs/testing';
import { DefaultcolumnstatusesService } from './defaultcolumnstatuses.service';

describe('DefaultcolumnstatusesService', () => {
  let service: DefaultcolumnstatusesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DefaultcolumnstatusesService],
    }).compile();

    service = module.get<DefaultcolumnstatusesService>(DefaultcolumnstatusesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
