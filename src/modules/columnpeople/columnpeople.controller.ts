import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ColumnpeopleService } from './columnpeople.service';
import { CreateColumnpersonDto } from './dto/create-columnperson.dto';
import { UpdateColumnpersonDto } from './dto/update-columnperson.dto';

@Controller('columnpeople')
export class ColumnpeopleController {
  constructor(private readonly columnpeopleService: ColumnpeopleService) {}

  @Post()
  create(@Body() createColumnpersonDto: CreateColumnpersonDto) {
    return this.columnpeopleService.create(createColumnpersonDto);
  }

  @Get()
  findAll() {
    return this.columnpeopleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.columnpeopleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateColumnpersonDto: UpdateColumnpersonDto) {
    return this.columnpeopleService.update(+id, updateColumnpersonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.columnpeopleService.remove(+id);
  }
}
