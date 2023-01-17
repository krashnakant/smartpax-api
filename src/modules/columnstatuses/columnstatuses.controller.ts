import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ColumnstatusesService } from './columnstatuses.service';
import { CreateColumnstatusDto } from './dto/create-columnstatus.dto';
import { UpdateColumnstatusDto } from './dto/update-columnstatus.dto';
import { Response } from 'express';
import { Res } from '@nestjs/common/decorators';

@Controller('columnstatuses')
export class ColumnstatusesController {
  constructor(private readonly columnstatusesService: ColumnstatusesService) {}

  @Post()
  create(@Body() createColumnstatusDto: CreateColumnstatusDto) {
    return this.columnstatusesService.create(createColumnstatusDto);
  }

  @Get()
  async findAll(@Res() res: Response) {
    let columnstatuses = await this.columnstatusesService.findAll();
    let responseJSON = {"data": { "columnstatuses": columnstatuses, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    let columnstatus = await this.columnstatusesService.findOne(+id);
    let responseJSON = {"data": { "columnstatus": columnstatus, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateColumnstatusDto: UpdateColumnstatusDto) {
    return this.columnstatusesService.update(+id, updateColumnstatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.columnstatusesService.remove(+id);
  }
}
