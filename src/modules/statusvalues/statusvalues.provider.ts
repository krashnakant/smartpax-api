
import { STATUSVALUE_REPOSITORY } from '../../core/constants';
import { Statusvalue } from './entities/statusvalue.entity';

export const statusvaluesProviders = [{
    provide: STATUSVALUE_REPOSITORY,
    useValue: Statusvalue,
}];