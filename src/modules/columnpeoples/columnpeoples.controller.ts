import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ColumnpeoplesService } from './columnpeoples.service';
import { CreateColumnpeopleDto } from './dto/create-columnperson.dto';
import { UpdateColumnpeopleDto } from './dto/update-columnperson.dto';

@Controller('columnpeoples')
export class ColumnpeoplesController {
  constructor(private readonly columnpeoplesService: ColumnpeoplesService) {}

  @Post()
  create(@Body() createColumnpeopleDto: CreateColumnpeopleDto) {
    return this.columnpeoplesService.create(createColumnpeopleDto);
  }

  @Get()
  findAll() {
    return this.columnpeoplesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.columnpeoplesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateColumnpeopleDto: UpdateColumnpeopleDto) {
    return this.columnpeoplesService.update(+id, updateColumnpeopleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.columnpeoplesService.remove(+id);
  }
}
