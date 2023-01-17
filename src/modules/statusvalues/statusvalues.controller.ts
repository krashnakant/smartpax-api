import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StatusvaluesService } from './statusvalues.service';
import { CreateStatusvalueDto } from './dto/create-statusvalue.dto';
import { UpdateStatusvalueDto } from './dto/update-statusvalue.dto';
import { Response } from 'express';
import { Res } from '@nestjs/common/decorators';

@Controller('statusvalues')
export class StatusvaluesController {
  constructor(private readonly statusvaluesService: StatusvaluesService) {}

  @Post()
  create(@Body() createStatusvalueDto: CreateStatusvalueDto) {
    return this.statusvaluesService.create(createStatusvalueDto);
  }

  @Get()
  async findAll(@Res() res: Response) {
    let statusvalues = await this.statusvaluesService.findAll();
    let responseJSON = {"data": { "statusvalues": statusvalues, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Get("findallbystatusid/:status_id")
  findAllByStatusId(@Param('status_id') status_id: number){
    return this.statusvaluesService.findAllByStatusId(status_id);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    let statusvalue = await this.statusvaluesService.findOne(+id);
    let responseJSON = {"data": { "statusvalue": statusvalue, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStatusvalueDto: UpdateStatusvalueDto) {
    return this.statusvaluesService.update(+id, updateStatusvalueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.statusvaluesService.remove(+id);
  }
}
