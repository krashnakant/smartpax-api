import { Injectable, Inject } from '@nestjs/common';
import { INVITATION_REPOSITORY } from 'src/core/constants';
import { CreateInvitationDto } from './dto/create-invitation.dto';
import { UpdateInvitationDto } from './dto/update-invitation.dto';
import { Invitation } from './entities/invitation.entity';

@Injectable()
export class InvitationsService {

  constructor(@Inject(INVITATION_REPOSITORY) private readonly invitationRepository: typeof Invitation) { }

  async create(createInvitationDto: CreateInvitationDto): Promise<Invitation> {
    return await this.invitationRepository.create<Invitation>(createInvitationDto);
  }

  async findAll(): Promise<Invitation[]> {
    return await this.invitationRepository.findAll<Invitation>();
  }


  findOne(id: number) {
    return `This action returns a #${id} invitation`;
  }

  update(id: number, updateInvitationDto: UpdateInvitationDto) {
    return `This action updates a #${id} invitation`;
  }

  remove(id: number) {
    return `This action removes a #${id} invitation`;
  }
}
