import { INVITATIONITEM_REPOSITORY } from '../../core/constants';
import { Invitationitem } from './entities/invitationitem.entity';

export const invitationitemsProviders = [{
    provide: INVITATIONITEM_REPOSITORY,
    useValue: Invitationitem,
}];