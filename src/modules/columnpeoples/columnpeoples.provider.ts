import { COLUMNPEOPLE_REPOSITORY } from 'src/core/constants';
import { Columnperson } from './entities/columnperson.entity';

export const columnpeoplesProviders = [{
    provide: COLUMNPEOPLE_REPOSITORY,
    useValue: Columnperson,
}];