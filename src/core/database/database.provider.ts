import { Sequelize } from 'sequelize-typescript';
import { Columndropdown } from 'src/modules/columndropdowns/entities/columndropdown.entity';
import { Columnperson } from 'src/modules/columnpeople/entities/columnperson.entity';
import { GColumn } from 'src/modules/columns/entities/column.entity';
import { Columnstatus } from 'src/modules/columnstatuses/entities/columnstatus.entity';
import { Defaultcolumndropdown } from 'src/modules/defaultcolumndropdowns/entities/defaultcolumndropdown.entity';
import { Defaultcolumnperson } from 'src/modules/defaultcolumnpeople/entities/defaultcolumnperson.entity';
import { Defaultcolumn } from 'src/modules/defaultcolumns/entities/defaultcolumn.entity';
import { Defaultcolumnstatus } from 'src/modules/defaultcolumnstatuses/entities/defaultcolumnstatus.entity';
import { Dropdown } from 'src/modules/dropdowns/entities/dropdown.entity';
import { Dropdownvalue } from 'src/modules/dropdownvalues/entities/dropdownvalue.entity';
import { Group } from 'src/modules/groups/entities/group.entity';
import { Item } from 'src/modules/items/entities/item.entity';
import { Row } from 'src/modules/rows/entities/row.entity';
import { Status } from 'src/modules/statuses/entities/status.entity';
import { Statusvalue } from 'src/modules/statusvalues/entities/statusvalue.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([
        User,
        Dropdown,
        Dropdownvalue,
        Status,
        Statusvalue,
        Item,
        Defaultcolumn,
        Defaultcolumndropdown,
        Defaultcolumnperson,
        Defaultcolumnstatus,
        GColumn,
        Columndropdown,
        Columnperson,
        Columnstatus,
        Group,
        Row,
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
