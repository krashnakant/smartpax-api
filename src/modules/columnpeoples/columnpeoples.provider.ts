import { COLUMNPEOPLE_REPOSITORY } from 'src/core/constants';
import { Columnpeople } from './entities/columnperson.entity';

export const columnpeoplesProviders = [{
    provide: COLUMNPEOPLE_REPOSITORY,
    useValue: Columnpeople,
}];