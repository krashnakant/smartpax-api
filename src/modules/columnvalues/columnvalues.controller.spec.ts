import { Test, TestingModule } from '@nestjs/testing';
import { ColumnvaluesController } from './columnvalues.controller';
import { ColumnvaluesService } from './columnvalues.service';

describe('ColumnvaluesController', () => {
  let controller: ColumnvaluesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ColumnvaluesController],
      providers: [ColumnvaluesService],
    }).compile();

    controller = module.get<ColumnvaluesController>(ColumnvaluesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
