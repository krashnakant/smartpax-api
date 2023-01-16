import { Module } from '@nestjs/common';
import { InvitationitemsService } from './invitationitems.service';
import { InvitationitemsController } from './invitationitems.controller';
import { invitationitemsProviders } from './invitationitems.provider';

@Module({
  controllers: [InvitationitemsController],
  providers: [InvitationitemsService, ...invitationitemsProviders]
})
export class InvitationitemsModule {}
