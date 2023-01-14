import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DefaultcolumndropdownsService } from './defaultcolumndropdowns.service';
import { CreateDefaultcolumndropdownDto } from './dto/create-defaultcolumndropdown.dto';
import { UpdateDefaultcolumndropdownDto } from './dto/update-defaultcolumndropdown.dto';

@Controller('defaultcolumndropdowns')
export class DefaultcolumndropdownsController {
  constructor(private readonly defaultcolumndropdownsService: DefaultcolumndropdownsService) {}

  @Post()
  create(@Body() createDefaultcolumndropdownDto: CreateDefaultcolumndropdownDto) {
    return this.defaultcolumndropdownsService.create(createDefaultcolumndropdownDto);
  }

  @Get()
  findAll() {
    return this.defaultcolumndropdownsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.defaultcolumndropdownsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDefaultcolumndropdownDto: UpdateDefaultcolumndropdownDto) {
    return this.defaultcolumndropdownsService.update(+id, updateDefaultcolumndropdownDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.defaultcolumndropdownsService.remove(+id);
  }
}
