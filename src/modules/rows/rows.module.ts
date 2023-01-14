import { Module } from '@nestjs/common';
import { RowsService } from './rows.service';
import { RowsController } from './rows.controller';
import { rowsProviders } from './rows.provider';

@Module({
  controllers: [RowsController],
  providers: [RowsService,...rowsProviders]
})
export class RowsModule {}
