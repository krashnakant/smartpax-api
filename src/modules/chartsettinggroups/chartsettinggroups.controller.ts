import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChartsettinggroupsService } from './chartsettinggroups.service';
import { CreateChartsettinggroupDto } from './dto/create-chartsettinggroup.dto';
import { UpdateChartsettinggroupDto } from './dto/update-chartsettinggroup.dto';
import { Response } from 'express';
import { Res } from '@nestjs/common/decorators';

@Controller('chartsettinggroups')
export class ChartsettinggroupsController {
  constructor(private readonly chartsettinggroupsService: ChartsettinggroupsService) {}

  @Post()
  create(@Body() createChartsettinggroupDto: any) {
    return this.chartsettinggroupsService.create(createChartsettinggroupDto.data);
  }

  @Get()
  async findAll(@Res() res: Response) {
    let chartsettinggroups = await this.chartsettinggroupsService.findAll();
    let responseJSON = {"data": { "chartsettinggroups": chartsettinggroups, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    let chartsettinggroup = await this.chartsettinggroupsService.findOne(+id);
    let responseJSON = {"data": { "chartsettinggroup": chartsettinggroup, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChartsettinggroupDto: any) {
    return this.chartsettinggroupsService.update(+id, updateChartsettinggroupDto.data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chartsettinggroupsService.remove(+id);
  }
}
