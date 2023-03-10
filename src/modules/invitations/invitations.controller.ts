import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InvitationsService } from './invitations.service';
import { CreateInvitationDto } from './dto/create-invitation.dto';
import { UpdateInvitationDto } from './dto/update-invitation.dto';

@Controller('invitations')
export class InvitationsController {
  constructor(private readonly invitationsService: InvitationsService) {}

  @Post()
  create(@Body() createInvitationDto: any) {
    return this.invitationsService.create(createInvitationDto.data);
  }

  @Get()
  findAll() {
    return this.invitationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.invitationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInvitationDto: any) {
    return this.invitationsService.update(+id, updateInvitationDto.data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.invitationsService.remove(+id);
  }
}
