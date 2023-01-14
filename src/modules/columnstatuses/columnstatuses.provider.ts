
import { COLUMNSTATUS_REPOSITORY } from '../../core/constants';
import { Columnstatus } from './entities/columnstatus.entity';

export const columnsStatusProviders = [{
    provide: COLUMNSTATUS_REPOSITORY,
    useValue: Columnstatus,
}];