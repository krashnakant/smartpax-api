import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ColumnpeoplesService } from './columnpeoples.service';
import { CreateColumnpeopleDto } from './dto/create-columnperson.dto';
import { UpdateColumnpeopleDto } from './dto/update-columnperson.dto';
import { Response } from 'express';
import { Res } from '@nestjs/common/decorators';

@Controller('columnpeoples')
export class ColumnpeoplesController {
  constructor(private readonly columnpeoplesService: ColumnpeoplesService) {}

  @Post()
  create(@Body() createColumnpeopleDto: CreateColumnpeopleDto) {
    return this.columnpeoplesService.create(createColumnpeopleDto);
  }

  @Get()
  async findAll(@Res() res: Response) {
    let columnpeoples = await this.columnpeoplesService.findAll();
    let responseJSON = {"data": { "columnpeoples": columnpeoples, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    let columnpeople = await this.columnpeoplesService.findOne(+id);
    let responseJSON = {"data": { "columnpeople": columnpeople, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateColumnpeopleDto: UpdateColumnpeopleDto) {
    return this.columnpeoplesService.update(+id, updateColumnpeopleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.columnpeoplesService.remove(+id);
  }
}
