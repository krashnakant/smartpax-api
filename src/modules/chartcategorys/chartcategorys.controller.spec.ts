import { Test, TestingModule } from '@nestjs/testing';
import { ChartcategorysController } from './chartcategorys.controller';
import { ChartcategorysService } from './chartcategorys.service';

describe('ChartcategorysController', () => {
  let controller: ChartcategorysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChartcategorysController],
      providers: [ChartcategorysService],
    }).compile();

    controller = module.get<ChartcategorysController>(ChartcategorysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
