import { Test, TestingModule } from '@nestjs/testing';
import { DefaultcolumndropdownsService } from './defaultcolumndropdowns.service';

describe('DefaultcolumndropdownsService', () => {
  let service: DefaultcolumndropdownsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DefaultcolumndropdownsService],
    }).compile();

    service = module.get<DefaultcolumndropdownsService>(DefaultcolumndropdownsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
