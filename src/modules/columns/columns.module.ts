import { Module } from '@nestjs/common';
import { ColumnsService } from './columns.service';
import { ColumnsController } from './columns.controller';
import { columnsProviders } from './columns.provider';
import { columnsDropdownProviders } from '../columndropdowns/columnsdropdowns.provider';
import { columnsStatusProviders } from '../columnstatuses/columnstatuses.provider';
import { columnpeoplesProviders } from '../columnpeoples/columnpeoples.provider';


@Module({
  controllers: [ColumnsController],
  providers: [ColumnsService,...columnsProviders,...columnsDropdownProviders,...columnsStatusProviders,... columnpeoplesProviders]
})
export class ColumnsModule {}
