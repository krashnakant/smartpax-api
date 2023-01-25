import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DefaultcolumnstatusesService } from './defaultcolumnstatuses.service';
import { CreateDefaultcolumnstatusDto } from './dto/create-defaultcolumnstatus.dto';
import { UpdateDefaultcolumnstatusDto } from './dto/update-defaultcolumnstatus.dto';
import { Response } from 'express';
import { Res } from '@nestjs/common/decorators';

@Controller('defaultcolumnstatuses')
export class DefaultcolumnstatusesController {
  constructor(private readonly defaultcolumnstatusesService: DefaultcolumnstatusesService) {}

  @Post()
  create(@Body() createDefaultcolumnstatusDto: CreateDefaultcolumnstatusDto) {
    return this.defaultcolumnstatusesService.create(createDefaultcolumnstatusDto);
  }

  @Get()
  async findAll(@Res() res: Response) {
    let defaultcolumnstatuses = await this.defaultcolumnstatusesService.findAll();
    let responseJSON = {"data": { "defaultcolumnstatuses": defaultcolumnstatuses, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    let defaultcolumnstatus = await this.defaultcolumnstatusesService.findOne(+id);
    let responseJSON = {"data": { "defaultcolumnstatus": defaultcolumnstatus, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDefaultcolumnstatusDto: any) {
    return this.defaultcolumnstatusesService.update(+id, updateDefaultcolumnstatusDto.data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.defaultcolumnstatusesService.remove(+id);
  }
}
