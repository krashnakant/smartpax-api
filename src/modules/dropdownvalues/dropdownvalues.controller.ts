import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DropdownvaluesService } from './dropdownvalues.service';
import { CreateDropdownvalueDto } from './dto/create-dropdownvalue.dto';
import { UpdateDropdownvalueDto } from './dto/update-dropdownvalue.dto';

@Controller('dropdownvalues')
export class DropdownvaluesController {
  constructor(private readonly dropdownvaluesService: DropdownvaluesService) {}

  @Post()
  create(@Body() createDropdownvalueDto: CreateDropdownvalueDto) {
    return this.dropdownvaluesService.create(createDropdownvalueDto);
  }

  @Get()
  findAll() {
    return this.dropdownvaluesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dropdownvaluesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDropdownvalueDto: UpdateDropdownvalueDto) {
    return this.dropdownvaluesService.update(+id, updateDropdownvalueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dropdownvaluesService.remove(+id);
  }

  @Get("findallbydropdownid/:dropdown_id")
  findAllByDropdownId(@Param('dropdown_id') dropdown_id: number){
    return this.dropdownvaluesService.findAllByDropdownId(dropdown_id);
  }
}
