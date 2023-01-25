import { Injectable, Inject } from '@nestjs/common';
import { CHART_REPOSITORY } from 'src/core/constants';
import { CreateChartDto } from './dto/create-chart.dto';
import { UpdateChartDto } from './dto/update-chart.dto';
import { Chart } from './entities/chart.entity';

@Injectable()
export class ChartsService {

  constructor(@Inject(CHART_REPOSITORY) private readonly chartRepository: typeof Chart) { }

  async create(createChartDto: CreateChartDto): Promise<Chart> {
    return await this.chartRepository.create<Chart>(createChartDto);
  }

  async findAll(): Promise<Chart[]> {
    return await this.chartRepository.findAll<Chart>();
  }

  findOne(id: number) {
    return `This action returns a #${id} chart`;
  }

  async update(id: number, updateChartDto: UpdateChartDto) {
    return await this.chartRepository.update<Chart>(updateChartDto, {where: {id}});
  }

  async remove(id: number) {
    return await this.chartRepository.destroy({where: {id}})
  }  
}
