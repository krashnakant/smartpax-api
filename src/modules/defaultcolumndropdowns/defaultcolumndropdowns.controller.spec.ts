import { Test, TestingModule } from '@nestjs/testing';
import { DefaultcolumndropdownsController } from './defaultcolumndropdowns.controller';
import { DefaultcolumndropdownsService } from './defaultcolumndropdowns.service';

describe('DefaultcolumndropdownsController', () => {
  let controller: DefaultcolumndropdownsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DefaultcolumndropdownsController],
      providers: [DefaultcolumndropdownsService],
    }).compile();

    controller = module.get<DefaultcolumndropdownsController>(DefaultcolumndropdownsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
