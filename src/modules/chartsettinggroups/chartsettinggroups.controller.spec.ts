import { Test, TestingModule } from '@nestjs/testing';
import { ChartsettinggroupsController } from './chartsettinggroups.controller';
import { ChartsettinggroupsService } from './chartsettinggroups.service';

describe('ChartsettinggroupsController', () => {
  let controller: ChartsettinggroupsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChartsettinggroupsController],
      providers: [ChartsettinggroupsService],
    }).compile();

    controller = module.get<ChartsettinggroupsController>(ChartsettinggroupsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
