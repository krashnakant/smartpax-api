import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DefaultcolumndropdownsService } from './defaultcolumndropdowns.service';
import { CreateDefaultcolumndropdownDto } from './dto/create-defaultcolumndropdown.dto';
import { UpdateDefaultcolumndropdownDto } from './dto/update-defaultcolumndropdown.dto';
import { Response } from 'express';
import { Res } from '@nestjs/common/decorators';

@Controller('defaultcolumndropdowns')
export class DefaultcolumndropdownsController {
  constructor(private readonly defaultcolumndropdownsService: DefaultcolumndropdownsService) {}

  @Post()
  create(@Body() createDefaultcolumndropdownDto: CreateDefaultcolumndropdownDto) {
    return this.defaultcolumndropdownsService.create(createDefaultcolumndropdownDto);
  }

  @Get()
  async findAll(@Res() res: Response) {
    let defaultcolumndropdowns = await this.defaultcolumndropdownsService.findAll();
    let responseJSON = {"data": { "defaultcolumndropdowns": defaultcolumndropdowns, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    let defaultcolumndropdown = await this.defaultcolumndropdownsService.findOne(+id);
    let responseJSON = {"data": { "defaultcolumndropdown": defaultcolumndropdown, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDefaultcolumndropdownDto: any) {
    return this.defaultcolumndropdownsService.update(+id, updateDefaultcolumndropdownDto.data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.defaultcolumndropdownsService.remove(+id);
  }
}
