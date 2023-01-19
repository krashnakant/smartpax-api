import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { Res } from '@nestjs/common/decorators';
import { Response } from 'express';

@Controller('groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Post()
  create(@Body() createGroupDto: any) {
    return this.groupsService.create(createGroupDto.data);
  }

  @Get()
  async findAll(@Res() res: Response) {
    let groups = await this.groupsService.findAll();
    let responseJSON = {"data": { "groups": groups, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    let group = await this.groupsService.findOne(+id);
    let responseJSON = {"data": { "group": group, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGroupDto: UpdateGroupDto) {
    return this.groupsService.update(+id, updateGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupsService.remove(+id);
  }

  @Get('itemgroups/:item_id')
  async getItemGroups(@Param() {item_id}, @Res() res: Response) {
    let groups = await this.groupsService.findAllGroups(item_id);
    let responseJSON = {"data": { "item_id": item_id, "groups": groups, status: 200 }};
    res.status(200).send(responseJSON);
  }
}
