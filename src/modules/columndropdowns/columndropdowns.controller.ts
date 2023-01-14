import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ColumndropdownsService } from './columndropdowns.service';
import { CreateColumndropdownDto } from './dto/create-columndropdown.dto';
import { UpdateColumndropdownDto } from './dto/update-columndropdown.dto';

@Controller('columndropdowns')
export class ColumndropdownsController {
  constructor(private readonly columndropdownsService: ColumndropdownsService) {}

  @Post()
  create(@Body() createColumndropdownDto: CreateColumndropdownDto) {
    return this.columndropdownsService.create(createColumndropdownDto);
  }

  @Get()
  findAll() {
    return this.columndropdownsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.columndropdownsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateColumndropdownDto: UpdateColumndropdownDto) {
    return this.columndropdownsService.update(+id, updateColumndropdownDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.columndropdownsService.remove(+id);
  }
}
