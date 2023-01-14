import { Test, TestingModule } from '@nestjs/testing';
import { DefaultcolumnsController } from './defaultcolumns.controller';
import { DefaultcolumnsService } from './defaultcolumns.service';

describe('DefaultcolumnsController', () => {
  let controller: DefaultcolumnsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DefaultcolumnsController],
      providers: [DefaultcolumnsService],
    }).compile();

    controller = module.get<DefaultcolumnsController>(DefaultcolumnsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
