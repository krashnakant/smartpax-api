import { PartialType } from '@nestjs/mapped-types';
import { CreateInvitationitemDto } from './create-invitationitem.dto';

export class UpdateInvitationitemDto extends PartialType(CreateInvitationitemDto) {}
