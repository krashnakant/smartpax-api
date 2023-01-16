import { FILTER_REPOSITORY } from 'src/core/constants';
import { Filter } from './entities/filter.entity';

export const filtersProviders = [{
    provide: FILTER_REPOSITORY,
    useValue: Filter,
}];