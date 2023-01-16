import { COLUMNVALUE_REPOSITORY } from 'src/core/constants';
import { Columnvalue } from './entities/columnvalue.entity';

export const columnvaluesProviders = [{
    provide: COLUMNVALUE_REPOSITORY,
    useValue: Columnvalue,
}];