import { Test, TestingModule } from '@nestjs/testing';
import { ColumnpeopleController } from './columnpeople.controller';
import { ColumnpeopleService } from './columnpeople.service';

describe('ColumnpeopleController', () => {
  let controller: ColumnpeopleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ColumnpeopleController],
      providers: [ColumnpeopleService],
    }).compile();

    controller = module.get<ColumnpeopleController>(ColumnpeopleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
