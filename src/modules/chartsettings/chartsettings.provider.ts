import { CHARTSETTING_REPOSITORY } from 'src/core/constants';
import { Chartsetting } from './entities/chartsetting.entity';


export const chartsettingsProviders = [{
    provide: CHARTSETTING_REPOSITORY,
    useValue: Chartsetting,
}];