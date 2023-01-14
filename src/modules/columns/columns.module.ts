import { Module } from '@nestjs/common';
import { ColumnsService } from './columns.service';
import { ColumnsController } from './columns.controller';
import { columnsProviders } from './columns.provider';

@Module({
  controllers: [ColumnsController],
  providers: [ColumnsService,...columnsProviders]
})
export class ColumnsModule {}
