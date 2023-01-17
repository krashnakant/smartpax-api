import { Injectable, Inject } from '@nestjs/common';
import { BENCHMARK_REPOSITORY } from 'src/core/constants';
import { CreateBenchmarkDto } from './dto/create-benchmark.dto';
import { UpdateBenchmarkDto } from './dto/update-benchmark.dto';
import { Benchmark } from './entities/benchmark.entity';

@Injectable()
export class BenchmarksService {

  constructor(@Inject(BENCHMARK_REPOSITORY) private readonly benchmarkRepository: typeof Benchmark) { }

  async create(createBenchmarkDto: CreateBenchmarkDto): Promise<Benchmark> {
    return await this.benchmarkRepository.create<Benchmark>(CreateBenchmarkDto);
  }

  async findAll(): Promise<Benchmark[]> {
    return await this.benchmarkRepository.findAll<Benchmark>();
  }


  findOne(id: number) {
    return `This action returns a #${id} benchmark`;
  }

  update(id: number, updateBenchmarkDto: UpdateBenchmarkDto) {
    return `This action updates a #${id} benchmark`;
  }

  remove(id: number) {
    return `This action removes a #${id} benchmark`;
  }
}
