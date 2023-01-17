import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ColumnvaluesService } from './columnvalues.service';
import { CreateColumnvalueDto } from './dto/create-columnvalue.dto';
import { UpdateColumnvalueDto } from './dto/update-columnvalue.dto';
import { Response } from 'express';
import { Res } from '@nestjs/common/decorators';

@Controller('columnvalues')
export class ColumnvaluesController {
  constructor(private readonly columnvaluesService: ColumnvaluesService) {}

  @Post()
  create(@Body() createColumnvalueDto: CreateColumnvalueDto) {
    return this.columnvaluesService.create(createColumnvalueDto);
  }

  @Get()
  async findAll(@Res() res: Response) {
    let columnvalues = await this.columnvaluesService.findAll();
    let responseJSON = {"data": { "columnvalues": columnvalues, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    let columnvalue = await this.columnvaluesService.findOne(+id);
    let responseJSON = {"data": { "columnvalue": columnvalue, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateColumnvalueDto: UpdateColumnvalueDto) {
    return this.columnvaluesService.update(+id, updateColumnvalueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.columnvaluesService.remove(+id);
  }
}
