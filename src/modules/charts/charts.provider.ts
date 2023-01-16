import { CHART_REPOSITORY } from 'src/core/constants';
import { Chart } from './entities/chart.entity';


export const chartsProviders = [{
    provide: CHART_REPOSITORY,
    useValue: Chart,
}];