import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChartsettingsService } from './chartsettings.service';
import { CreateChartsettingDto } from './dto/create-chartsetting.dto';
import { UpdateChartsettingDto } from './dto/update-chartsetting.dto';

@Controller('chartsettings')
export class ChartsettingsController {
  constructor(private readonly chartsettingsService: ChartsettingsService) {}

  @Post()
  create(@Body() createChartsettingDto: CreateChartsettingDto) {
    return this.chartsettingsService.create(createChartsettingDto);
  }

  @Get()
  findAll() {
    return this.chartsettingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chartsettingsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChartsettingDto: UpdateChartsettingDto) {
    return this.chartsettingsService.update(+id, updateChartsettingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chartsettingsService.remove(+id);
  }
}
