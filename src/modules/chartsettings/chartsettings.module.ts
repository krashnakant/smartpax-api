import { Module } from '@nestjs/common';
import { ChartsettingsService } from './chartsettings.service';
import { ChartsettingsController } from './chartsettings.controller';
import { chartsettingsProviders } from './chartsettings.provider';

@Module({
  controllers: [ChartsettingsController],
  providers: [ChartsettingsService, ...chartsettingsProviders]
})
export class ChartsettingsModule {}
