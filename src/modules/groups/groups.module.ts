import { Module } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { GroupsController } from './groups.controller';
import { groupsProviders } from './groups.provider';
import { columnsProviders } from '../columns/columns.provider';
import { defaultColumnsProviders } from '../defaultcolumns/defaultcolumns.provider';

@Module({
  controllers: [GroupsController],
  providers: [GroupsService, ...groupsProviders,...columnsProviders,...defaultColumnsProviders]
})
export class GroupsModule {}
