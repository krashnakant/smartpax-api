import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InvitationitemsService } from './invitationitems.service';
import { CreateInvitationitemDto } from './dto/create-invitationitem.dto';
import { UpdateInvitationitemDto } from './dto/update-invitationitem.dto';

@Controller('invitationitems')
export class InvitationitemsController {
  constructor(private readonly invitationitemsService: InvitationitemsService) {}

  @Post()
  create(@Body() createInvitationitemDto: CreateInvitationitemDto) {
    return this.invitationitemsService.create(createInvitationitemDto);
  }

  @Get()
  findAll() {
    return this.invitationitemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.invitationitemsService.findOne(+id);
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
