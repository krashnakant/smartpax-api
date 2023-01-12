import { Injectable, Inject } from '@nestjs/common';
import { ITEM_REPOSITORY } from 'src/core/constants';
import { CreateItemDto } from './dto/create-item.dto';
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
