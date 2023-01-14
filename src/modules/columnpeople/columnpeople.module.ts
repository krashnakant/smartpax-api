import { Module } from '@nestjs/common';
import { ColumnpeopleService } from './columnpeople.service';
import { ColumnpeopleController } from './columnpeople.controller';
import { columnsPeopleProviders } from './columnpeople.provider';
import { columnsDropdownProviders } from '../columndropdowns/columnsdropdowns.provider';
import { columnsStatusProviders } from '../columnstatuses/columnstatuses.provider';

@Module({
  controllers: [ColumnpeopleController],
  providers: [ColumnpeopleService,...columnsPeopleProviders, ...columnsDropdownProviders, ...columnsStatusProviders]
})
export class ColumnpeopleModule {}
