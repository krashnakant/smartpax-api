import { Test, TestingModule } from '@nestjs/testing';
import { DefaultcolumnpeopleController } from './defaultcolumnpeople.controller';
import { DefaultcolumnpeopleService } from './defaultcolumnpeople.service';

describe('DefaultcolumnpeopleController', () => {
  let controller: DefaultcolumnpeopleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DefaultcolumnpeopleController],
      providers: [DefaultcolumnpeopleService],
    }).compile();

    controller = module.get<DefaultcolumnpeopleController>(DefaultcolumnpeopleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
