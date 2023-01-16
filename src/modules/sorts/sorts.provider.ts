
import { SORT_REPOSITORY } from 'src/core/constants';
import { Sort } from './entities/sort.entity';

export const sortProviders = [{
    provide: SORT_REPOSITORY,
    useValue: Sort,
}];