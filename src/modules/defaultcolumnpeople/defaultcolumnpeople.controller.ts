import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DefaultcolumnpeopleService } from './defaultcolumnpeople.service';
import { CreateDefaultcolumnpersonDto } from './dto/create-defaultcolumnperson.dto';
import { UpdateDefaultcolumnpersonDto } from './dto/update-defaultcolumnperson.dto';
import { Response } from 'express';
import { Res } from '@nestjs/common/decorators';

@Controller('defaultcolumnpeople')
export class DefaultcolumnpeopleController {
  constructor(private readonly defaultcolumnpeopleService: DefaultcolumnpeopleService) {}

  @Post()
  create(@Body() createDefaultcolumnpersonDto: any) {
    return this.defaultcolumnpeopleService.create(createDefaultcolumnpersonDto.data);
  }

  @Get()
  async findAll(@Res() res: Response) {
    let defaultcolumnpeoples = await this.defaultcolumnpeopleService.findAll();
    let responseJSON = {"data": { "defaultcolumnpeoples": defaultcolumnpeoples, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    let defaultcolumnpeople = await this.defaultcolumnpeopleService.findOne(+id);
    let responseJSON = {"data": { "defaultcolumnpeople": defaultcolumnpeople, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDefaultcolumnpersonDto: any) {
    return this.defaultcolumnpeopleService.update(+id, updateDefaultcolumnpersonDto.data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.defaultcolumnpeopleService.remove(+id);
  }
}
