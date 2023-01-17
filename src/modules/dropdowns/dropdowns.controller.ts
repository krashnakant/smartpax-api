import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DropdownsService } from './dropdowns.service';
import { CreateDropdownDto } from './dto/create-dropdown.dto';
import { UpdateDropdownDto } from './dto/update-dropdown.dto';
import { Response } from 'express';
import { Res } from '@nestjs/common/decorators';

@Controller('dropdowns')
export class DropdownsController {
  constructor(private readonly dropdownsService: DropdownsService) {}

  @Post()
  create(@Body() createDropdownDto: CreateDropdownDto) {
    return this.dropdownsService.create(createDropdownDto);
  }

  @Get()
  async findAll(@Res() res: Response) {
    let dropdowns = await this.dropdownsService.findAll();
    let responseJSON = {"data": { "dropdowns": dropdowns, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    let dropdown = await this.dropdownsService.findOne(+id);
    let responseJSON = {"data": { "dropdown": dropdown, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDropdownDto: UpdateDropdownDto) {
    return this.dropdownsService.update(+id, updateDropdownDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dropdownsService.remove(+id);
  }
}
