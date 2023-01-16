import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChartsettinggroupsService } from './chartsettinggroups.service';
import { CreateChartsettinggroupDto } from './dto/create-chartsettinggroup.dto';
import { UpdateChartsettinggroupDto } from './dto/update-chartsettinggroup.dto';

@Controller('chartsettinggroups')
export class ChartsettinggroupsController {
  constructor(private readonly chartsettinggroupsService: ChartsettinggroupsService) {}

  @Post()
  create(@Body() createChartsettinggroupDto: CreateChartsettinggroupDto) {
    return this.chartsettinggroupsService.create(createChartsettinggroupDto);
  }

  @Get()
  findAll() {
    return this.chartsettinggroupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chartsettinggroupsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChartsettinggroupDto: UpdateChartsettinggroupDto) {
    return this.chartsettinggroupsService.update(+id, updateChartsettinggroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chartsettinggroupsService.remove(+id);
  }
}
