import { Module } from '@nestjs/common';
import { ColumnstatusesService } from './columnstatuses.service';
import { ColumnstatusesController } from './columnstatuses.controller';
import { columnsStatusProviders } from './columnstatuses.provider';

@Module({
  controllers: [ColumnstatusesController],
  providers: [ColumnstatusesService,...columnsStatusProviders]
})
export class ColumnstatusesModule {}
