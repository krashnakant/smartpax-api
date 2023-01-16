import { CHARTCATEGORY_REPOSITORY } from 'src/core/constants';
import { Chartcategory } from './entities/chartcategory.entity';

export const chartcategorysProviders = [{
    provide: CHARTCATEGORY_REPOSITORY,
    useValue: Chartcategory,
}];