
import { DEFAULTCOLUMNSTATUS_REPOSITORY } from '../../core/constants';
import { Defaultcolumnstatus } from './entities/defaultcolumnstatus.entity';

export const defaultColumnStatusProviders = [{
    provide: DEFAULTCOLUMNSTATUS_REPOSITORY,
    useValue: Defaultcolumnstatus,
}];