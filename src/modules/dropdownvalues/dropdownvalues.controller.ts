import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DropdownvaluesService } from './dropdownvalues.service';
import { CreateDropdownvalueDto } from './dto/create-dropdownvalue.dto';
import { UpdateDropdownvalueDto } from './dto/update-dropdownvalue.dto';
import { Response } from 'express';
import { Res } from '@nestjs/common/decorators';

@Controller('dropdownvalues')
export class DropdownvaluesController {
  constructor(private readonly dropdownvaluesService: DropdownvaluesService) {}

  @Post()
  create(@Body() createDropdownvalueDto: any) {
    return this.dropdownvaluesService.create(createDropdownvalueDto.data);
  }

  @Get()
  async findAll(@Res() res: Response) {
    let dropdownvalues = await this.dropdownvaluesService.findAll();
    let responseJSON = {"data": { "dropdownvalues": dropdownvalues, status: 200 }};
    res.status(200).send(responseJSON);
    return 
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    let dropdownvalue = await this.dropdownvaluesService.findOne(+id);
    let responseJSON = {"data": { "dropdownvalue": dropdownvalue, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDropdownvalueDto: any) {
    return this.dropdownvaluesService.update(+id, updateDropdownvalueDto.data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dropdownvaluesService.remove(+id);
  }

  @Get("findallbydropdownid/:dropdown_id")
  async findAllByDropdownId(@Param('dropdown_id') dropdown_id: number, @Res() res: Response){
    let dropdownvalues = await this.dropdownvaluesService.findAllByDropdownId(dropdown_id);
    let responseJSON = {"data": { "dropdownvalues": dropdownvalues, status: 200 }};
    res.status(200).send(responseJSON);
  }
}
