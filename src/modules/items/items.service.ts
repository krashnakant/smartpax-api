import { Injectable, Inject } from '@nestjs/common';
import { COLUMN_REPOSITORY, DEFAULTCOLUMN_REPOSITORY, ITEM_REPOSITORY } from 'src/core/constants';
import { CreateColumnDto } from '../columns/dto/create-column.dto';
import { GColumn } from '../columns/entities/column.entity';
import { Defaultcolumn } from '../defaultcolumns/entities/defaultcolumn.entity';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemDto } from './dto/item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemsService {

  constructor(
    @Inject(ITEM_REPOSITORY) private readonly itemRepository: typeof Item, 
    @Inject(COLUMN_REPOSITORY) private readonly columnRepository: typeof GColumn,
    @Inject(DEFAULTCOLUMN_REPOSITORY) private readonly defaultColumnRepository: typeof Defaultcolumn

  ) { }

  async create(createItemDto: CreateItemDto): Promise<Item> {

    let item = await this.itemRepository.create<Item>(createItemDto);
    if (createItemDto.item_type == "dataset") {
      let allDefaultColumns = await this.defaultColumnRepository.findAll<Defaultcolumn>();
      //console.log(allDefaultColumns)
      allDefaultColumns.map(async (dcolumn, index) => {
        let datavalue = dcolumn.dataValues;
        console.log(dcolumn.dataValues)
        let newColumn:CreateColumnDto = {
          column_name:datavalue.column_name,
          datatype:datavalue.datatype,
          item_id:item.id,
          hidden:false,
          order:index,
          formula:"sum",
          unit_position:"l",
          unit:"$"
        }
        await this.columnRepository.create<GColumn>(newColumn)
      })
    }
    
    return item;
  }

  async findAll(): Promise<Item[]> {
    return await this.itemRepository.findAll<Item>();
  }

  async findAllItems(user_id: number, item_type: string): Promise<Item[]> {
    let items = await this.itemRepository.findAll<Item>({where: {user_id}})    
    let itemtypes = items.filter((item) => item.item_type == item_type)
    let allitems = itemtypes.map((item) => {
      let children = items.filter((i) => i.parent_id == item.id)
      item.dataValues.children = children;
      children.map((child) => {
        let childs_children = items.filter((i) => i.parent_id == child.id)
        child.dataValues.children = childs_children;
        return child;
      });
      return item;
    })
    return allitems;
  }

  async findAllWorkspaces(user_id: number, item_type: string): Promise<any> {
    const workspaces:Item[] = await this.itemRepository.findAll<Item>({where: {user_id, item_type: 'workspace'}});    
    let responseJSON = {data :{ "user_id": user_id, "workspace": workspaces, "dashboard": [], status: 200 }};
    return responseJSON; 
  }

  async findOne(id: number) {
    return await this.itemRepository.findOne<Item>({ where: { id }, include:[this.columnRepository] });
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }

  
}
