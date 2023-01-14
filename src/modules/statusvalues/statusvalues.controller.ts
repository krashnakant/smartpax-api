import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StatusvaluesService } from './statusvalues.service';
import { CreateStatusvalueDto } from './dto/create-statusvalue.dto';
import { UpdateStatusvalueDto } from './dto/update-statusvalue.dto';

@Controller('statusvalues')
export class StatusvaluesController {
  constructor(private readonly statusvaluesService: StatusvaluesService) {}

  @Post()
  create(@Body() createStatusvalueDto: CreateStatusvalueDto) {
    return this.statusvaluesService.create(createStatusvalueDto);
  }

  @Get()
  findAll() {
    return this.statusvaluesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.statusvaluesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStatusvalueDto: UpdateStatusvalueDto) {
    return this.statusvaluesService.update(+id, updateStatusvalueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.statusvaluesService.remove(+id);
  }
}
