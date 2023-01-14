
import { DEFAULTCOLUMNDROPDOWN_REPOSITORY } from '../../core/constants';
import { Defaultcolumndropdown } from './entities/defaultcolumndropdown.entity';

export const defaultColumnDropdownProviders = [{
    provide: DEFAULTCOLUMNDROPDOWN_REPOSITORY,
    useValue: Defaultcolumndropdown,
}];