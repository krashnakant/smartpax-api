import { Module } from '@nestjs/common';
import { ChartsettinggroupsService } from './chartsettinggroups.service';
import { ChartsettinggroupsController } from './chartsettinggroups.controller';
import { chartsettinggroupsProviders } from './chartsettinggroups.provider';

@Module({
  controllers: [ChartsettinggroupsController],
  providers: [ChartsettinggroupsService, ...chartsettinggroupsProviders]
})
export class ChartsettinggroupsModule {}
