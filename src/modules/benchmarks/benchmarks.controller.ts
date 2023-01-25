import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BenchmarksService } from './benchmarks.service';
import { CreateBenchmarkDto } from './dto/create-benchmark.dto';
import { UpdateBenchmarkDto } from './dto/update-benchmark.dto';
import { Response } from 'express';
import { Res } from '@nestjs/common/decorators';

@Controller('benchmarks')
export class BenchmarksController {
  constructor(private readonly benchmarksService: BenchmarksService) {}

  @Post()
  create(@Body() createBenchmarkDto: any) {
    return this.benchmarksService.create(createBenchmarkDto.data);
  }

  @Get()
  async findAll(@Res() res: Response) {
    let benchmarks = await this.benchmarksService.findAll();
    let responseJSON = {"data": { "benchmarks": benchmarks, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    let benchmark = await this.benchmarksService.findOne(+id);
    let responseJSON = {"data": { "benchmark": benchmark, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBenchmarkDto: any) {
    return this.benchmarksService.update(+id, updateBenchmarkDto.data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.benchmarksService.remove(+id);
  }
}
