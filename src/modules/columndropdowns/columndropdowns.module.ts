import { Module } from '@nestjs/common';
import { ColumndropdownsService } from './columndropdowns.service';
import { ColumndropdownsController } from './columndropdowns.controller';
import { columnsDropdownProviders } from './columnsdropdowns.provider';

@Module({
  controllers: [ColumndropdownsController],
  providers: [ColumndropdownsService,...columnsDropdownProviders]
})
export class ColumndropdownsModule {}
