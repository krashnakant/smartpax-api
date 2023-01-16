import { Test, TestingModule } from '@nestjs/testing';
import { CharttypesController } from './charttypes.controller';
import { CharttypesService } from './charttypes.service';

describe('CharttypesController', () => {
  let controller: CharttypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CharttypesController],
      providers: [CharttypesService],
    }).compile();

    controller = module.get<CharttypesController>(CharttypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
