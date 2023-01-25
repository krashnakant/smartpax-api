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
    return await this.invitationRepository.findAll<Invitation>({where: {delete_status:false}});
  }


  findOne(id: number) {
    return `This action returns a #${id} invitation`;
  }

  async update(id: number, updateInvitationDto: UpdateInvitationDto) {
    return await this.invitationRepository.update<Invitation>(updateInvitationDto, {where: {id}});
  }

  async remove(id: number) {
    let data = {
      delete_status:true
    }
    return await this.invitationRepository.update<Invitation>(data, {where: {id}});
    // return await this.invitationRepository.destroy({where: {id}})
  }
}
