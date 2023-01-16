import { Module } from '@nestjs/common';
import { ChartcategorysService } from './chartcategorys.service';
import { ChartcategorysController } from './chartcategorys.controller';
import { chartcategorysProviders } from './chartcategorys.provider';

@Module({
  controllers: [ChartcategorysController],
  providers: [ChartcategorysService, ...chartcategorysProviders]
})
export class ChartcategorysModule {}
