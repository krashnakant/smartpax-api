import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Response } from 'express';
import { Res } from '@nestjs/common/decorators';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  create(@Body() createItemDto: any) {
    return this.itemsService.create(createItemDto.data);
  }

  @Get()
  async findAll(@Res() res: Response) {
    let items = await this.itemsService.findAll();
    let responseJSON = {"data": { "items": items, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    let item = await this.itemsService.findOne(+id);
    let responseJSON = {"data": { "item": item, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemDto: any) {
    return this.itemsService.update(+id, updateItemDto.data);
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
