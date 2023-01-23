import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { itemsProviders } from './items.providers';
import { columnsProviders } from '../columns/columns.provider';
import { defaultColumnsProviders } from '../defaultcolumns/defaultcolumns.provider';

@Module({
  controllers: [ItemsController],
  providers: [ItemsService,...itemsProviders, ...columnsProviders, ...defaultColumnsProviders]
})
export class ItemsModule {}
