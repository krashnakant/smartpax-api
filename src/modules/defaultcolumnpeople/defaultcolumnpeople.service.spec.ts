import { Test, TestingModule } from '@nestjs/testing';
import { DefaultcolumnpeopleService } from './defaultcolumnpeople.service';

describe('DefaultcolumnpeopleService', () => {
  let service: DefaultcolumnpeopleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DefaultcolumnpeopleService],
    }).compile();

    service = module.get<DefaultcolumnpeopleService>(DefaultcolumnpeopleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
