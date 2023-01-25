import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SortService } from './sorts.service';
import { CreateSortDto } from './dto/create-sort.dto';
import { UpdateSortDto } from './dto/update-sort.dto';
import { Response } from 'express';
import { Res } from '@nestjs/common/decorators';

@Controller('sort')
export class SortController {
  constructor(private readonly sortService: SortService) {}

  @Post()
  create(@Body() createSortDto: CreateSortDto) {
    return this.sortService.create(createSortDto);
  }

  @Get()
  async findAll(@Res() res: Response) {
    let sorts = await this.sortService.findAll();
    let responseJSON = {"data": { "sorts": sorts, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    let sort = await this.sortService.findOne(+id);
    let responseJSON = {"data": { "sort": sort, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSortDto: any) {
    return this.sortService.update(+id, updateSortDto.data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sortService.remove(+id);
  }
}
