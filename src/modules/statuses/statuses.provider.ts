
import { STATUS_REPOSITORY } from '../../core/constants';
import { Status } from './entities/status.entity';

export const statusesProviders = [{
    provide: STATUS_REPOSITORY,
    useValue: Status,
}];