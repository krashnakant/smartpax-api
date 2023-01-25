import { Injectable, Inject } from '@nestjs/common';
import { CHARTCATEGORY_REPOSITORY } from 'src/core/constants';
import { CreateChartcategoryDto } from './dto/create-chartcategory.dto';
import { UpdateChartcategoryDto } from './dto/update-chartcategory.dto';
import { Chartcategory } from './entities/chartcategory.entity';

@Injectable()
export class ChartcategorysService {

  constructor(@Inject(CHARTCATEGORY_REPOSITORY) private readonly chartcategoryRepository: typeof Chartcategory) { }

  async create(createChartcategoryDto: CreateChartcategoryDto): Promise<Chartcategory> {
    return await this.chartcategoryRepository.create<Chartcategory>(createChartcategoryDto);
  }

  async findAll(): Promise<Chartcategory[]> {
    return await this.chartcategoryRepository.findAll<Chartcategory>();
  }


  findOne(id: number) {
    return `This action returns a #${id} chartcategory`;
  }
  
  async update(id: number, updateChartcategoryDto: UpdateChartcategoryDto) {
    return await this.chartcategoryRepository.update<Chartcategory>(updateChartcategoryDto, {where: {id}});
  }

  async remove(id: number) {
    return await this.chartcategoryRepository.destroy({where: {id}})
  }  
}
