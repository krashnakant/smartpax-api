
import { COLUMNDROPDOWN_REPOSITORY } from '../../core/constants';
import { Columndropdown } from './entities/columndropdown.entity';

export const columnsDropdownProviders = [{
    provide: COLUMNDROPDOWN_REPOSITORY,
    useValue: Columndropdown,
}];