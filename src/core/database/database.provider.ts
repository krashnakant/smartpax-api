import { Sequelize } from 'sequelize-typescript';
import { Defaultcolumn } from 'src/modules/defaultcolumns/entities/defaultcolumn.entity';
import { Group } from 'src/modules/groups/entities/group.entity';
import { Item } from 'src/modules/items/entities/item.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';

export const databaseProviders = [{
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
        sequelize.addModels([User,Item,Group,Defaultcolumn]);
        await sequelize.sync();
        return sequelize;
    },
}];