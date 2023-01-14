
import { DEFAULTCOLUMNPEOPLE_REPOSITORY } from '../../core/constants';
import { Defaultcolumnperson } from './entities/defaultcolumnperson.entity';

export const defaultColumnPeopleProviders = [{
    provide: DEFAULTCOLUMNPEOPLE_REPOSITORY,
    useValue: Defaultcolumnperson,
}];