
import { DEFAULTCOLUMN_REPOSITORY } from '../../core/constants';
import { Defaultcolumn } from './entities/defaultcolumn.entity';

export const defaultColumnsProviders = [{
    provide: DEFAULTCOLUMN_REPOSITORY,
    useValue: Defaultcolumn,
}];