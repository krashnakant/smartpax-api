import { Injectable } from '@nestjs/common';
import { CreateInvitationitemDto } from './dto/create-invitationitem.dto';
import { UpdateInvitationitemDto } from './dto/update-invitationitem.dto';

@Injectable()
export class InvitationitemsService {
  create(createInvitationitemDto: CreateInvitationitemDto) {
    return 'This action adds a new invitationitem';
  }

  findAll() {
    return `This action returns all invitationitems`;
  }

  findOne(id: number) {
    return `This action returns a #${id} invitationitem`;
  }

  update(id: number, updateInvitationitemDto: UpdateInvitationitemDto) {
    return `This action updates a #${id} invitationitem`;
  }

  remove(id: number) {
    return `This action removes a #${id} invitationitem`;
  }
}
