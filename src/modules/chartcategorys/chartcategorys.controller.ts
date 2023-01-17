import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChartcategorysService } from './chartcategorys.service';
import { CreateChartcategoryDto } from './dto/create-chartcategory.dto';
import { UpdateChartcategoryDto } from './dto/update-chartcategory.dto';
import { Response } from 'express';
import { Res } from '@nestjs/common/decorators';

@Controller('chartcategorys')
export class ChartcategorysController {
  constructor(private readonly chartcategorysService: ChartcategorysService) {}

  @Post()
  create(@Body() createChartcategoryDto: CreateChartcategoryDto) {
    return this.chartcategorysService.create(createChartcategoryDto);
  }

  @Get()
  async findAll(@Res() res: Response) {
    let chartcategorys = await this.chartcategorysService.findAll();
    let responseJSON = {"data": { "chartcategorys": chartcategorys, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    let chartcategory = await this.chartcategorysService.findOne(+id);
    let responseJSON = {"data": { "chartcategory": chartcategory, status: 200 }};
    res.status(200).send(responseJSON);
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
