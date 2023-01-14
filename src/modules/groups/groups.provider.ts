
import { GROUP_REPOSITORY } from '../../core/constants';
import { Group } from './entities/group.entity';

export const groupsProviders = [{
    provide: GROUP_REPOSITORY,
    useValue: Group,
}];