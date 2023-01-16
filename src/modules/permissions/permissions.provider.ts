import { PERMISSION_REPOSITORY } from 'src/core/constants';
import { Permission } from './entities/permission.entity';

export const permissionsProviders = [{
    provide: PERMISSION_REPOSITORY,
    useValue: Permission,
}];