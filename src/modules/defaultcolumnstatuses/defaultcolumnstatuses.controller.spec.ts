import { Test, TestingModule } from '@nestjs/testing';
import { DefaultcolumnstatusesController } from './defaultcolumnstatuses.controller';
import { DefaultcolumnstatusesService } from './defaultcolumnstatuses.service';

describe('DefaultcolumnstatusesController', () => {
  let controller: DefaultcolumnstatusesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DefaultcolumnstatusesController],
      providers: [DefaultcolumnstatusesService],
    }).compile();

    controller = module.get<DefaultcolumnstatusesController>(DefaultcolumnstatusesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
