import { Injectable, Inject } from '@nestjs/common';
import { INVITATIONITEM_REPOSITORY } from 'src/core/constants';
import { CreateInvitationitemDto } from './dto/create-invitationitem.dto';
import { UpdateInvitationitemDto } from './dto/update-invitationitem.dto';
import { Invitationitem } from './entities/invitationitem.entity';

@Injectable()
export class InvitationitemsService {

  constructor(@Inject(INVITATIONITEM_REPOSITORY) private readonly invitationitemRepository: typeof Invitationitem) { }

  async create(createInvitationitemDto: CreateInvitationitemDto): Promise<Invitationitem> {
    return await this.invitationitemRepository.create<Invitationitem>(createInvitationitemDto);
  }

  async findAll(): Promise<Invitationitem[]> {
    return await this.invitationitemRepository.findAll<Invitationitem>();
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
