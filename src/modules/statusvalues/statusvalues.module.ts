import { Module } from '@nestjs/common';
import { StatusvaluesService } from './statusvalues.service';
import { StatusvaluesController } from './statusvalues.controller';
import { statusvaluesProviders } from './statusvalues.provider';

@Module({
  controllers: [StatusvaluesController],
  providers: [StatusvaluesService, ...statusvaluesProviders]
})
export class StatusvaluesModule {}
