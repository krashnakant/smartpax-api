import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StatusesService } from './statuses.service';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { Response } from 'express';
import { Res } from '@nestjs/common/decorators';

@Controller('statuses')
export class StatusesController {
  constructor(private readonly statusesService: StatusesService) {}

  @Post()
  create(@Body() createStatusDto: any) {
    return this.statusesService.create(createStatusDto.data);
  }

  @Get()
  async findAll(@Res() res: Response) {
    let cstatuses = await this.statusesService.findAll();
    let responseJSON = {"data": { "cstatuses": cstatuses, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    let cstatus = await this.statusesService.findOne(+id);
    let responseJSON = {"data": { "cstatus": cstatus, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStatusDto: any) {
    return this.statusesService.update(+id, updateStatusDto.data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.statusesService.remove(+id);
  }
}
