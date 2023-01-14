import { Test, TestingModule } from '@nestjs/testing';
import { StatusvaluesController } from './statusvalues.controller';
import { StatusvaluesService } from './statusvalues.service';

describe('StatusvaluesController', () => {
  let controller: StatusvaluesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StatusvaluesController],
      providers: [StatusvaluesService],
    }).compile();

    controller = module.get<StatusvaluesController>(StatusvaluesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
