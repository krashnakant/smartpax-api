import { Test, TestingModule } from '@nestjs/testing';
import { ColumnstatusesController } from './columnstatuses.controller';
import { ColumnstatusesService } from './columnstatuses.service';

describe('ColumnstatusesController', () => {
  let controller: ColumnstatusesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ColumnstatusesController],
      providers: [ColumnstatusesService],
    }).compile();

    controller = module.get<ColumnstatusesController>(ColumnstatusesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
