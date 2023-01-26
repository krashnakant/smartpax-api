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
  create(@Body() createColumnvalueDto: any) {
    return this.columnvaluesService.create(createColumnvalueDto.data);
  }

  @Get('findallbygroupid/:group_id')
  async findAllByGroupId(@Param('group_id') group_id: number,@Res() res: Response) {
    let rows = await this.columnvaluesService.findAllByGroupId(group_id);
    let responseJSON = {"data": { "rows": rows, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Get('findallbyitemid/:item_id')
  async findAllByItemId(@Param('item_id') item_id: number,@Res() res: Response) {
    let columnvalues = await this.columnvaluesService.findAllByItemId(item_id);
    let responseJSON = {"data": { "columnvalues": columnvalues, status: 200 }};
    res.status(200).send(responseJSON);
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
  update(@Param('id') id: string, @Body() updateColumnvalueDto: any) {
    return this.columnvaluesService.update(+id, updateColumnvalueDto.data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.columnvaluesService.remove(+id);
  }
}
