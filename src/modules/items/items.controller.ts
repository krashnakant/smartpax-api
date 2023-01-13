import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Res } from '@nestjs/common/decorators';
import { Response } from 'express';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  create(@Body() createItemDto: CreateItemDto) {
    return this.itemsService.create(createItemDto);
  }

  @Get()
  findAll() {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    return this.itemsService.update(+id, updateItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemsService.remove(+id);
  }

  @Get('menuitems/:user_id')
  async getMenuItems(@Param() {user_id}, @Res() res: Response) {
    let workspaces = await this.itemsService.findAllItems(user_id, 'workspace');
    let dashboards = await this.itemsService.findAllItems(user_id, 'dashboard');
    let responseJSON = {"data": { "user_id": user_id, "workspaces": workspaces, "dashboards": dashboards, status: 200 }};
    //console.log("test",responseJSON);
    //return responseJSON;
    res.status(200).send(responseJSON);
  }
}
