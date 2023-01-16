import { Module } from '@nestjs/common';
import { ChartsService } from './charts.service';
import { ChartsController } from './charts.controller';
import { chartsProviders } from './charts.provider';

@Module({
  controllers: [ChartsController],
  providers: [ChartsService, ...chartsProviders]
})
export class ChartsModule {}
