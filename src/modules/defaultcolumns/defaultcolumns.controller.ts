import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DefaultcolumnsService } from './defaultcolumns.service';
import { CreateDefaultcolumnDto } from './dto/create-defaultcolumn.dto';
import { UpdateDefaultcolumnDto } from './dto/update-defaultcolumn.dto';

@Controller('defaultcolumns')
export class DefaultcolumnsController {
  constructor(private readonly defaultcolumnsService: DefaultcolumnsService) {}

  @Post()
  create(@Body() createDefaultcolumnDto: CreateDefaultcolumnDto) {
    return this.defaultcolumnsService.create(createDefaultcolumnDto);
  }

  @Get()
  findAll() {
    return this.defaultcolumnsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.defaultcolumnsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDefaultcolumnDto: UpdateDefaultcolumnDto) {
    return this.defaultcolumnsService.update(+id, updateDefaultcolumnDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.defaultcolumnsService.remove(+id);
  }
}
