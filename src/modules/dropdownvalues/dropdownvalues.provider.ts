
import { DROPDOWNVALUES_REPOSITORY } from '../../core/constants';
import { Dropdownvalue } from './entities/dropdownvalue.entity';

export const dropdownvaluesProviders = [{
    provide: DROPDOWNVALUES_REPOSITORY,
    useValue: Dropdownvalue,
}];