
import { DROPDOWN_REPOSITORY } from '../../core/constants';
import { Dropdown } from './entities/dropdown.entity';

export const dropdownsProviders = [{
    provide: DROPDOWN_REPOSITORY,
    useValue: Dropdown,
}];