import { Injectable, Inject } from '@nestjs/common';
import { ITEM_REPOSITORY } from 'src/core/constants';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemDto } from './dto/item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemsService {

  constructor(@Inject(ITEM_REPOSITORY) private readonly itemRepository: typeof Item) { }

  async create(createItemDto: CreateItemDto): Promise<Item> {
    return await this.itemRepository.create<Item>(createItemDto);
  }

  async findAll(): Promise<Item[]> {
    return await this.itemRepository.findAll<Item>();
  }

  async findAllItems(user_id: number, item_type: string): Promise<Item[]> {
    let items = await this.itemRepository.findAll<Item>({where: {user_id, item_type}})    
    let allitems = await Promise.all(items.map(async (item) => {
      let children = await this.itemRepository.findAll<Item>({where: {user_id,parent_id: item.id}})
      item.dataValues.children = children;
      let furtherChildren = await Promise.all(children.map(async (child) => {
        let childs_children = await this.itemRepository.findAll<Item>({where: {user_id,parent_id: child.id}})
        child.dataValues.children = childs_children;
        return child;
      }))
      return item;
    }));
    return allitems;
  }

  async getItems(user_id: number, item_type: string): Promise<any> {
    const workspaces:Item[] = await this.itemRepository.findAll<Item>({where: {user_id, item_type: item_type}});    
    let responseJSON = { "user_id": user_id, "workspace": workspaces, "dashboard": [], status: 200 };
    return responseJSON; 
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }

  
}
