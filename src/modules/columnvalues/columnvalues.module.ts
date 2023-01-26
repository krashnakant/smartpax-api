import { Module } from '@nestjs/common';
import { ColumnvaluesService } from './columnvalues.service';
import { ColumnvaluesController } from './columnvalues.controller';
import { columnvaluesProviders } from './columnvalues.provider';
import { itemsProviders } from '../items/items.providers';
import { groupsProviders } from '../groups/groups.provider';

@Module({
  controllers: [ColumnvaluesController],
  providers: [ColumnvaluesService, ...columnvaluesProviders,...itemsProviders,...groupsProviders]
})
export class ColumnvaluesModule {}
