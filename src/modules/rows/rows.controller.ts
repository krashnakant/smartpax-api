import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RowsService } from './rows.service';
import { CreateRowDto } from './dto/create-row.dto';
import { UpdateRowDto } from './dto/update-row.dto';
import { Response } from 'express';
import { Res } from '@nestjs/common/decorators';

@Controller('rows')
export class RowsController {
  constructor(private readonly rowsService: RowsService) {}

  @Post()
  create(@Body() createRowDto: any) {
    return this.rowsService.create(createRowDto.data);
  }

  @Get('findallbygroupid/:group_id')
  async findAllByGroupId(@Param('group_id') group_id: number,@Res() res: Response) {
    let rows = await this.rowsService.findAllByGroupId(group_id);
    let responseJSON = {"data": { "rows": rows, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Get()
  async findAll(@Res() res: Response) {
    let rows = await this.rowsService.findAll();
    let responseJSON = {"data": { "rows": rows, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    let row = await this.rowsService.findOne(+id);
    let responseJSON = {"data": { "row": row, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRowDto: UpdateRowDto) {
    return this.rowsService.update(+id, updateRowDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rowsService.remove(+id);
  }
}
