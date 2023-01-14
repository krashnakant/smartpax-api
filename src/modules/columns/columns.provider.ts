
import { COLUMN_REPOSITORY } from '../../core/constants';
import { GColumn } from './entities/column.entity';

export const columnsProviders = [{
    provide: COLUMN_REPOSITORY,
    useValue: GColumn,
}];