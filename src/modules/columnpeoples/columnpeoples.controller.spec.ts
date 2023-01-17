import { Test, TestingModule } from '@nestjs/testing';
import { ColumnpeoplesController } from './columnpeoples.controller';
import { ColumnpeoplesService } from './columnpeoples.service';

describe('ColumnpeoplesController', () => {
  let controller: ColumnpeoplesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ColumnpeoplesController],
      providers: [ColumnpeoplesService],
    }).compile();

    controller = module.get<ColumnpeoplesController>(ColumnpeoplesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
