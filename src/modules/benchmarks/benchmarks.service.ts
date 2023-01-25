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
    return await this.benchmarkRepository.findAll<Benchmark>({ where: { delete_status:true } });
  }


  findOne(id: number) {
    return `This action returns a #${id} benchmark`;
  }

  async update(id: number, updateBenchmarkDto: UpdateBenchmarkDto) {
    return await this.benchmarkRepository.update<Benchmark>(updateBenchmarkDto, {where: {id}});
  }

  async remove(id: number) {
    let data = {
      delete_status:false
    }
    return await this.benchmarkRepository.update<Benchmark>(data, {where: {id}});
    //return await this.benchmarkRepository.destroy({where: {id}})
  }  

  
}
