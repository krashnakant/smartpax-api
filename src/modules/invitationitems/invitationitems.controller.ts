import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InvitationitemsService } from './invitationitems.service';
import { CreateInvitationitemDto } from './dto/create-invitationitem.dto';
import { UpdateInvitationitemDto } from './dto/update-invitationitem.dto';
import { Response } from 'express';
import { Res } from '@nestjs/common/decorators';

@Controller('invitationitems')
export class InvitationitemsController {
  constructor(private readonly invitationitemsService: InvitationitemsService) {}

  @Post()
  create(@Body() createInvitationitemDto: CreateInvitationitemDto) {
    return this.invitationitemsService.create(createInvitationitemDto);
  }

  @Get()
  async findAll(@Res() res: Response) {
    let invitationitems = await this.invitationitemsService.findAll();
    let responseJSON = {"data": { "invitationitems": invitationitems, status: 200 }};
    res.status(200).send(responseJSON);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    let invitationitem = await this.invitationitemsService.findOne(+id);
    let responseJSON = {"data": { "invitationitem": invitationitem, status: 200 }};
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInvitationitemDto: UpdateInvitationitemDto) {
    return this.invitationitemsService.update(+id, updateInvitationitemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.invitationitemsService.remove(+id);
  }
}
