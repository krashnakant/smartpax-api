import { Test, TestingModule } from '@nestjs/testing';
import { ChartsettingsController } from './chartsettings.controller';
import { ChartsettingsService } from './chartsettings.service';

describe('ChartsettingsController', () => {
  let controller: ChartsettingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChartsettingsController],
      providers: [ChartsettingsService],
    }).compile();

    controller = module.get<ChartsettingsController>(ChartsettingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
