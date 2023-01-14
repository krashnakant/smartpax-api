import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DropdownsService } from './dropdowns.service';
import { CreateDropdownDto } from './dto/create-dropdown.dto';
import { UpdateDropdownDto } from './dto/update-dropdown.dto';

@Controller('dropdowns')
export class DropdownsController {
  constructor(private readonly dropdownsService: DropdownsService) {}

  @Post()
  create(@Body() createDropdownDto: CreateDropdownDto) {
    return this.dropdownsService.create(createDropdownDto);
  }

  @Get()
  findAll() {
    return this.dropdownsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dropdownsService.findOne(+id);
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
