import { Test, TestingModule } from '@nestjs/testing';
import { SortController } from './sorts.controller';
import { SortService } from './sorts.service';

describe('SortController', () => {
  let controller: SortController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SortController],
      providers: [SortService],
    }).compile();

    controller = module.get<SortController>(SortController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
