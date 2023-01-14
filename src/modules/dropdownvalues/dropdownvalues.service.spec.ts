import { Test, TestingModule } from '@nestjs/testing';
import { DropdownvaluesService } from './dropdownvalues.service';

describe('DropdownvaluesService', () => {
  let service: DropdownvaluesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DropdownvaluesService],
    }).compile();

    service = module.get<DropdownvaluesService>(DropdownvaluesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
