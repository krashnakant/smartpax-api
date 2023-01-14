import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DefaultcolumnstatusesService } from './defaultcolumnstatuses.service';
import { CreateDefaultcolumnstatusDto } from './dto/create-defaultcolumnstatus.dto';
import { UpdateDefaultcolumnstatusDto } from './dto/update-defaultcolumnstatus.dto';

@Controller('defaultcolumnstatuses')
export class DefaultcolumnstatusesController {
  constructor(private readonly defaultcolumnstatusesService: DefaultcolumnstatusesService) {}

  @Post()
  create(@Body() createDefaultcolumnstatusDto: CreateDefaultcolumnstatusDto) {
    return this.defaultcolumnstatusesService.create(createDefaultcolumnstatusDto);
  }

  @Get()
  findAll() {
    return this.defaultcolumnstatusesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.defaultcolumnstatusesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDefaultcolumnstatusDto: UpdateDefaultcolumnstatusDto) {
    return this.defaultcolumnstatusesService.update(+id, updateDefaultcolumnstatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.defaultcolumnstatusesService.remove(+id);
  }
}
