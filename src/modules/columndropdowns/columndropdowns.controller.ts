import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ColumndropdownsService } from './columndropdowns.service';
import { CreateColumndropdownDto } from './dto/create-columndropdown.dto';
import { UpdateColumndropdownDto } from './dto/update-columndropdown.dto';
import { Response } from 'express';
import { Res } from '@nestjs/common/decorators';

@Controller('columndropdowns')
export class ColumndropdownsController {
  constructor(private readonly columndropdownsService: ColumndropdownsService) {}

  @Post()
  create(@Body() createColumndropdownDto: CreateColumndropdownDto) {
    return this.columndropdownsService.create(createColumndropdownDto);
  }

  @Get()
  async findAll(@Res() res: Response) {
    let columndropdowns = await this.columndropdownsService.findAll();
    let responseJSON = {"data": { "columndropdowns": columndropdowns, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    let columndropdown = await this.columndropdownsService.findOne(+id);
    let responseJSON = {"data": { "columndropdown": columndropdown, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateColumndropdownDto: any) {
    return this.columndropdownsService.update(+id, updateColumndropdownDto.data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.columndropdownsService.remove(+id);
  }
}
