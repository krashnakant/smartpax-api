import { Injectable } from '@nestjs/common';
import { CreateChartcategoryDto } from './dto/create-chartcategory.dto';
import { UpdateChartcategoryDto } from './dto/update-chartcategory.dto';

@Injectable()
export class ChartcategorysService {
  create(createChartcategoryDto: CreateChartcategoryDto) {
    return 'This action adds a new chartcategory';
  }

  findAll() {
    return `This action returns all chartcategorys`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chartcategory`;
  }

  update(id: number, updateChartcategoryDto: UpdateChartcategoryDto) {
    return `This action updates a #${id} chartcategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} chartcategory`;
  }
}
