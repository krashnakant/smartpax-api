import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DefaultcolumnsService } from './defaultcolumns.service';
import { CreateDefaultcolumnDto } from './dto/create-defaultcolumn.dto';
import { UpdateDefaultcolumnDto } from './dto/update-defaultcolumn.dto';
import { Response } from 'express';
import { Res } from '@nestjs/common/decorators';

@Controller('defaultcolumns')
export class DefaultcolumnsController {
  constructor(private readonly defaultcolumnsService: DefaultcolumnsService) {}

  @Post()
  create(@Body() createDefaultcolumnDto: CreateDefaultcolumnDto) {
    return this.defaultcolumnsService.create(createDefaultcolumnDto);
  }

  @Get()
  async findAll(@Res() res: Response) {
    let defaultcolumns = await this.defaultcolumnsService.findAll();
    let responseJSON = {"data": { "defaultcolumns": defaultcolumns, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    let defaultcolumn = await this.defaultcolumnsService.findOne(+id);
    let responseJSON = {"data": { "defaultcolumn": defaultcolumn, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDefaultcolumnDto: any) {
    return this.defaultcolumnsService.update(+id, updateDefaultcolumnDto.data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.defaultcolumnsService.remove(+id);
  }
}
