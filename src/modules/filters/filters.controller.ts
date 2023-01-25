import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FiltersService } from './filters.service';
import { CreateFilterDto } from './dto/create-filter.dto';
import { UpdateFilterDto } from './dto/update-filter.dto';
import { Response } from 'express';
import { Res } from '@nestjs/common/decorators';

@Controller('filters')
export class FiltersController {
  constructor(private readonly filtersService: FiltersService) {}

  @Post()
  create(@Body() createFilterDto: CreateFilterDto) {
    return this.filtersService.create(createFilterDto);
  }

  @Get()
  async findAll(@Res() res: Response) {
    let filters = await this.filtersService.findAll();
    let responseJSON = {"data": { "filters": filters, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    let filter = await this.filtersService.findOne(+id);
    let responseJSON = {"data": { "filter": filter, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFilterDto: any) {
    return this.filtersService.update(+id, updateFilterDto.data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filtersService.remove(+id);
  }
}
