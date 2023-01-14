import { Test, TestingModule } from '@nestjs/testing';
import { DropdownvaluesController } from './dropdownvalues.controller';
import { DropdownvaluesService } from './dropdownvalues.service';

describe('DropdownvaluesController', () => {
  let controller: DropdownvaluesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DropdownvaluesController],
      providers: [DropdownvaluesService],
    }).compile();

    controller = module.get<DropdownvaluesController>(DropdownvaluesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
