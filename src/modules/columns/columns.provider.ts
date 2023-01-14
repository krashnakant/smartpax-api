
import { COLUMN_REPOSITORY } from '../../core/constants';
import { Column } from './entities/column.entity';

export const columnsProviders = [{
    provide: COLUMN_REPOSITORY,
    useValue: Column,
}];