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
import { ColumndropdownsModule } from './modules/columndropdowns/columndropdowns.module';
import { StatusesModule } from './modules/statuses/statuses.module';
import { StatusvaluesModule } from './modules/statusvalues/statusvalues.module';
import { InvitationsModule } from './modules/invitations/invitations.module';
import { InvitationitemsModule } from './modules/invitationitems/invitationitems.module';
import { ColumnvaluesModule } from './modules/columnvalues/columnvalues.module';
import { SortModule } from './modules/sorts/sorts.module';
import { FiltersModule } from './modules/filters/filters.module';
import { PermissionsModule } from './modules/permissions/permissions.module';
import { ChartcategorysModule } from './modules/chartcategorys/chartcategorys.module';
import { CharttypesModule } from './modules/charttypes/charttypes.module';
import { ChartsModule } from './modules/charts/charts.module';
import { ChartsettingsModule } from './modules/chartsettings/chartsettings.module';
import { ChartsettinggroupsModule } from './modules/chartsettinggroups/chartsettinggroups.module';
import { BenchmarksModule } from './modules/benchmarks/benchmarks.module';
import { ColumnpeoplesModule } from './modules/columnpeoples/columnpeoples.module';


@Module({
  imports: [DatabaseModule, ConfigModule.forRoot({isGlobal:true}), UsersModule, ItemsModule, GroupsModule, DefaultcolumnsModule, DropdownsModule, DropdownvaluesModule, ColumnsModule, RowsModule, DefaultcolumndropdownsModule, DefaultcolumnpeopleModule, DefaultcolumnstatusesModule, ColumnstatusesModule, ColumndropdownsModule, StatusesModule, StatusvaluesModule, InvitationsModule, InvitationitemsModule, ColumnvaluesModule, SortModule, FiltersModule, PermissionsModule, ChartcategorysModule, CharttypesModule, ChartsModule, ChartsettingsModule, ChartsettinggroupsModule, BenchmarksModule, ColumnpeoplesModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
