import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CharttypesService } from './charttypes.service';
import { CreateCharttypeDto } from './dto/create-charttype.dto';
import { UpdateCharttypeDto } from './dto/update-charttype.dto';

@Controller('charttypes')
export class CharttypesController {
  constructor(private readonly charttypesService: CharttypesService) {}

  @Post()
  create(@Body() createCharttypeDto: CreateCharttypeDto) {
    return this.charttypesService.create(createCharttypeDto);
  }

  @Get()
  findAll() {
    return this.charttypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.charttypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCharttypeDto: UpdateCharttypeDto) {
    return this.charttypesService.update(+id, updateCharttypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.charttypesService.remove(+id);
  }
}
