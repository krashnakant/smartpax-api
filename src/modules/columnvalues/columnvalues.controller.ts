import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ColumnvaluesService } from './columnvalues.service';
import { CreateColumnvalueDto } from './dto/create-columnvalue.dto';
import { UpdateColumnvalueDto } from './dto/update-columnvalue.dto';

@Controller('columnvalues')
export class ColumnvaluesController {
  constructor(private readonly columnvaluesService: ColumnvaluesService) {}

  @Post()
  create(@Body() createColumnvalueDto: CreateColumnvalueDto) {
    return this.columnvaluesService.create(createColumnvalueDto);
  }

  @Get()
  findAll() {
    return this.columnvaluesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.columnvaluesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateColumnvalueDto: UpdateColumnvalueDto) {
    return this.columnvaluesService.update(+id, updateColumnvalueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.columnvaluesService.remove(+id);
  }
}
