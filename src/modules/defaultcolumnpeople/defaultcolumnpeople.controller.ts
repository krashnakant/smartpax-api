import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DefaultcolumnpeopleService } from './defaultcolumnpeople.service';
import { CreateDefaultcolumnpersonDto } from './dto/create-defaultcolumnperson.dto';
import { UpdateDefaultcolumnpersonDto } from './dto/update-defaultcolumnperson.dto';

@Controller('defaultcolumnpeople')
export class DefaultcolumnpeopleController {
  constructor(private readonly defaultcolumnpeopleService: DefaultcolumnpeopleService) {}

  @Post()
  create(@Body() createDefaultcolumnpersonDto: CreateDefaultcolumnpersonDto) {
    return this.defaultcolumnpeopleService.create(createDefaultcolumnpersonDto);
  }

  @Get()
  findAll() {
    return this.defaultcolumnpeopleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.defaultcolumnpeopleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDefaultcolumnpersonDto: UpdateDefaultcolumnpersonDto) {
    return this.defaultcolumnpeopleService.update(+id, updateDefaultcolumnpersonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.defaultcolumnpeopleService.remove(+id);
  }
}
