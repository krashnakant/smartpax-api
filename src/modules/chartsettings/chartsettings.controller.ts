import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChartsettingsService } from './chartsettings.service';
import { CreateChartsettingDto } from './dto/create-chartsetting.dto';
import { UpdateChartsettingDto } from './dto/update-chartsetting.dto';
import { Response } from 'express';
import { Res } from '@nestjs/common/decorators';

@Controller('chartsettings')
export class ChartsettingsController {
  constructor(private readonly chartsettingsService: ChartsettingsService) {}

  @Post()
  create(@Body() createChartsettingDto: any) {
    return this.chartsettingsService.create(createChartsettingDto.data);
  }

  @Get()
  async findAll(@Res() res: Response) {
    let chartsettings = await this.chartsettingsService.findAll();
    let responseJSON = {"data": { "chartsettings": chartsettings, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    let chartsetting = await this.chartsettingsService.findOne(+id);
    let responseJSON = {"data": { "chartsetting": chartsetting, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChartsettingDto: any) {
    return this.chartsettingsService.update(+id, updateChartsettingDto.data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chartsettingsService.remove(+id);
  }
}
