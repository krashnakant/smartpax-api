import { Module } from '@nestjs/common';
import { StatusesService } from './statuses.service';
import { StatusesController } from './statuses.controller';
import { statusesProviders } from './statuses.provider';

@Module({
  controllers: [StatusesController],
  providers: [StatusesService, ...statusesProviders]
})
export class StatusesModule {}
