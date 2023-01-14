import { Test, TestingModule } from '@nestjs/testing';
import { ColumndropdownsController } from './columndropdowns.controller';
import { ColumndropdownsService } from './columndropdowns.service';

describe('ColumndropdownsController', () => {
  let controller: ColumndropdownsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ColumndropdownsController],
      providers: [ColumndropdownsService],
    }).compile();

    controller = module.get<ColumndropdownsController>(ColumndropdownsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
