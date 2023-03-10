import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ColumnsService } from './columns.service';
import { CreateColumnDto } from './dto/create-column.dto';
import { UpdateColumnDto } from './dto/update-column.dto';
import { Response } from 'express';
import { Res } from '@nestjs/common/decorators';

@Controller('columns')
export class ColumnsController {
  constructor(private readonly columnsService: ColumnsService) {}

  @Post()
  create(@Body() createColumnDto: any) {
    return this.columnsService.create(createColumnDto.data);
  }

  @Get()
  async findAll(@Res() res: Response) {
    let columns = await this.columnsService.findAll();
    let responseJSON = {"data": { "columns": columns, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Get('findallbyitemid/:item_id')
  async findAllByItemId(@Param('item_id') item_id: number,@Res() res: Response) {
    let columns = await this.columnsService.findAllByItemId(item_id);
    let responseJSON = {"data": { "columns": columns, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    let column = await this.columnsService.findOne(+id);
    let responseJSON = {"data": { "column": column, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateColumnDto: any) {
    return this.columnsService.update(+id, updateColumnDto.data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.columnsService.remove(+id);
  }
}
