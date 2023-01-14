import { Module } from '@nestjs/common';
import { ColumnsService } from './columns.service';
import { ColumnsController } from './columns.controller';
import { columnsProviders } from './columns.provider';
import { columnsDropdownProviders } from '../columndropdowns/columnsdropdowns.provider';
import { columnsPeopleProviders } from '../columnpeople/columnpeople.provider';
import { columnsStatusProviders } from '../columnstatuses/columnstatuses.provider';

@Module({
  controllers: [ColumnsController],
  providers: [ColumnsService,...columnsProviders,...columnsDropdownProviders,...columnsPeopleProviders,...columnsStatusProviders]
})
export class ColumnsModule {}
