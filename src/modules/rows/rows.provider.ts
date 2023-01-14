
import { ROW_REPOSITORY } from '../../core/constants';
import { Row } from './entities/row.entity';

export const rowsProviders = [{
    provide: ROW_REPOSITORY,
    useValue: Row,
}];