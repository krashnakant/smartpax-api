import { Module } from '@nestjs/common';
import { StatusesService } from './statuses.service';
import { StatusesController } from './statuses.controller';
import { statusesProviders } from './statuses.provider';
import { statusvaluesProviders } from '../statusvalues/statusvalues.provider';
import { columnsProviders } from '../columns/columns.provider';

@Module({
  controllers: [StatusesController],
  providers: [StatusesService, ...statusesProviders, ...statusvaluesProviders]
})
export class StatusesModule {}
