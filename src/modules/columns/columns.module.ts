import { Module } from '@nestjs/common';
import { ColumnsService } from './columns.service';
import { ColumnsController } from './columns.controller';
import { columnsProviders } from './columns.provider';
import { dropdownsProviders } from '../dropdowns/dropdowns.provider';
import { usersProviders } from '../users/users.providers';
import { statusesProviders } from '../statuses/statuses.provider';


@Module({
  controllers: [ColumnsController],
  providers: [ColumnsService,...columnsProviders,...dropdownsProviders,...usersProviders, ...statusesProviders]
})
export class ColumnsModule {}
