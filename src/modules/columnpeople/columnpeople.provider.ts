
import { COLUMNPEOPLE_REPOSITORY } from '../../core/constants';
import { Columnperson } from './entities/columnperson.entity';

export const columnsPeopleProviders = [{
    provide: COLUMNPEOPLE_REPOSITORY,
    useValue: Columnperson,
}];