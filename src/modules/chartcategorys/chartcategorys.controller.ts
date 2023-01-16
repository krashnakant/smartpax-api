import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChartcategorysService } from './chartcategorys.service';
import { CreateChartcategoryDto } from './dto/create-chartcategory.dto';
import { UpdateChartcategoryDto } from './dto/update-chartcategory.dto';

@Controller('chartcategorys')
export class ChartcategorysController {
  constructor(private readonly chartcategorysService: ChartcategorysService) {}

  @Post()
  create(@Body() createChartcategoryDto: CreateChartcategoryDto) {
    return this.chartcategorysService.create(createChartcategoryDto);
  }

  @Get()
  findAll() {
    return this.chartcategorysService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chartcategorysService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChartcategoryDto: UpdateChartcategoryDto) {
    return this.chartcategorysService.update(+id, updateChartcategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chartcategorysService.remove(+id);
  }
}
