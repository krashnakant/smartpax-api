import { CHARTSETTINGGROUP_REPOSITORY } from 'src/core/constants';
import { Chartsettinggroup } from './entities/chartsettinggroup.entity';


export const chartsettinggroupsProviders = [{
    provide: CHARTSETTINGGROUP_REPOSITORY,
    useValue: Chartsettinggroup,
}];