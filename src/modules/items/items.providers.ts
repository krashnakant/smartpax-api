
import { ITEM_REPOSITORY } from '../../core/constants';
import { Item } from './entities/item.entity';

export const itemsProviders = [{
    provide: ITEM_REPOSITORY,
    useValue: Item,
}];