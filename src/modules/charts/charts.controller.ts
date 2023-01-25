import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChartsService } from './charts.service';
import { CreateChartDto } from './dto/create-chart.dto';
import { UpdateChartDto } from './dto/update-chart.dto';
import { Response } from 'express';
import { Res } from '@nestjs/common/decorators';

@Controller('charts')
export class ChartsController {
  constructor(private readonly chartsService: ChartsService) {}

  @Post()
  create(@Body() createChartDto: CreateChartDto) {
    return this.chartsService.create(createChartDto);
  }

  @Get()
  async findAll(@Res() res: Response) {
    let charts = await this.chartsService.findAll();
    let responseJSON = {"data": { "charts": charts, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    let chart = await this.chartsService.findOne(+id);
    let responseJSON = {"data": { "chart": chart, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChartDto: any) {
    return this.chartsService.update(+id, updateChartDto.data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chartsService.remove(+id);
  }
}
