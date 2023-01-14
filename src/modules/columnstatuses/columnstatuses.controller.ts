import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ColumnstatusesService } from './columnstatuses.service';
import { CreateColumnstatusDto } from './dto/create-columnstatus.dto';
import { UpdateColumnstatusDto } from './dto/update-columnstatus.dto';

@Controller('columnstatuses')
export class ColumnstatusesController {
  constructor(private readonly columnstatusesService: ColumnstatusesService) {}

  @Post()
  create(@Body() createColumnstatusDto: CreateColumnstatusDto) {
    return this.columnstatusesService.create(createColumnstatusDto);
  }

  @Get()
  findAll() {
    return this.columnstatusesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.columnstatusesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateColumnstatusDto: UpdateColumnstatusDto) {
    return this.columnstatusesService.update(+id, updateColumnstatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.columnstatusesService.remove(+id);
  }
}
