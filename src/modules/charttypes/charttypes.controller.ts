import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CharttypesService } from './charttypes.service';
import { CreateCharttypeDto } from './dto/create-charttype.dto';
import { UpdateCharttypeDto } from './dto/update-charttype.dto';
import { Response } from 'express';
import { Res } from '@nestjs/common/decorators';

@Controller('charttypes')
export class CharttypesController {
  constructor(private readonly charttypesService: CharttypesService) {}

  @Post()
  create(@Body() createCharttypeDto: CreateCharttypeDto) {
    return this.charttypesService.create(createCharttypeDto);
  }

  @Get()
  async findAll(@Res() res: Response) {
    let charttypes = await this.charttypesService.findAll();
    let responseJSON = {"data": { "charttypes": charttypes, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    let charttype = await this.charttypesService.findOne(+id);
    let responseJSON = {"data": { "charttype": charttype, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCharttypeDto: UpdateCharttypeDto) {
    return this.charttypesService.update(+id, updateCharttypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.charttypesService.remove(+id);
  }
}
