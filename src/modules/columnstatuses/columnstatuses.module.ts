import { Module } from '@nestjs/common';
import { ColumnstatusesService } from './columnstatuses.service';
import { ColumnstatusesController } from './columnstatuses.controller';

@Module({
  controllers: [ColumnstatusesController],
  providers: [ColumnstatusesService]
})
export class ColumnstatusesModule {}
