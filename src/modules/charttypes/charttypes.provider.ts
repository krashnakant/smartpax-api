import { CHARTTYPE_REPOSITORY } from 'src/core/constants';
import { ChartType } from './entities/charttype.entity';


export const charttypesProviders = [{
    provide: CHARTTYPE_REPOSITORY,
    useValue: ChartType,
}];