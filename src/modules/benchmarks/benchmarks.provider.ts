import { BENCHMARK_REPOSITORY } from 'src/core/constants';
import { Benchmark } from './entities/benchmark.entity';


export const benchmarksProviders = [{
    provide: BENCHMARK_REPOSITORY,
    useValue: Benchmark,
}];