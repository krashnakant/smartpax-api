import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { UsersModule } from './modules/users/users.module';
import { ItemsModule } from './modules/items/items.module';
import { GroupsModule } from './modules/groups/groups.module';
import { DefaultcolumnsModule } from './modules/defaultcolumns/defaultcolumns.module';
import { DropdownsModule } from './modules/dropdowns/dropdowns.module';
import { DropdownvaluesModule } from './modules/dropdownvalues/dropdownvalues.module';
import { ColumnsModule } from './modules/columns/columns.module';
import { RowsModule } from './modules/rows/rows.module';
import { DefaultcolumndropdownsModule } from './modules/defaultcolumndropdowns/defaultcolumndropdowns.module';
import { DefaultcolumnpeopleModule } from './modules/defaultcolumnpeople/defaultcolumnpeople.module';
import { DefaultcolumnstatusesModule } from './modules/defaultcolumnstatuses/defaultcolumnstatuses.module';
import { ColumnstatusesModule } from './modules/columnstatuses/columnstatuses.module';
import { ColumnpeopleModule } from './modules/columnpeople/columnpeople.module';
import { ColumndropdownsModule } from './modules/columndropdowns/columndropdowns.module';
import { StatusesModule } from './modules/statuses/statuses.module';
import { StatusvaluesModule } from './modules/statusvalues/statusvalues.module';


@Module({
  imports: [DatabaseModule, ConfigModule.forRoot({isGlobal:true}), UsersModule, ItemsModule, GroupsModule, DefaultcolumnsModule, DropdownsModule, DropdownvaluesModule, ColumnsModule, RowsModule, DefaultcolumndropdownsModule, DefaultcolumnpeopleModule, DefaultcolumnstatusesModule, ColumnstatusesModule, ColumnpeopleModule, ColumndropdownsModule, StatusesModule, StatusvaluesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
