
import { INVITATION_REPOSITORY } from '../../core/constants';
import { Invitation } from './entities/invitation.entity';

export const invitationsProviders = [{
    provide: INVITATION_REPOSITORY,
    useValue: Invitation,
}];