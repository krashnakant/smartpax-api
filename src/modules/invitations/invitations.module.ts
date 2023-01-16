import { Module } from '@nestjs/common';
import { InvitationsService } from './invitations.service';
import { InvitationsController } from './invitations.controller';
import { invitationsProviders } from './invitations.provider';

@Module({
  controllers: [InvitationsController],
  providers: [InvitationsService,...invitationsProviders]
})
export class InvitationsModule {}
