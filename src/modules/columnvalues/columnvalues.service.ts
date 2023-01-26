import { Injectable, Inject } from '@nestjs/common';
import { COLUMNVALUE_REPOSITORY, GROUP_REPOSITORY, ITEM_REPOSITORY } from 'src/core/constants';
import { CreateGroupDto } from '../groups/dto/create-group.dto';
import { Group } from '../groups/entities/group.entity';
import { Item } from '../items/entities/item.entity';
import { CreateColumnvalueDto } from './dto/create-columnvalue.dto';
import { UpdateColumnvalueDto } from './dto/update-columnvalue.dto';
import { Columnvalue } from './entities/columnvalue.entity';

@Injectable()
export class ColumnvaluesService {

  constructor(
    @Inject(COLUMNVALUE_REPOSITORY) private readonly columnvalueRepository: typeof Columnvalue,
    @Inject(ITEM_REPOSITORY) private readonly itemRepository: typeof Item,
    @Inject(GROUP_REPOSITORY) private readonly groupRepository: typeof Group
    ) { }

  async create(createColumnvalueDto: CreateColumnvalueDto): Promise<Columnvalue> {
    return await this.columnvalueRepository.create<Columnvalue>(createColumnvalueDto);
  }

  async findAll(): Promise<Columnvalue[]> {
    return await this.columnvalueRepository.findAll<Columnvalue>({where: {delete_status:false}});
  }
  async findAllByGroupId(group_id: number): Promise<Columnvalue[]> {
    return await this.columnvalueRepository.findAll<Columnvalue>({where: { group_id, delete_status:false }});
  }

  async findAllByItemId(item_id: number): Promise<Columnvalue[]> {
    let groups = await this.groupRepository.findAll<Group>({where: {item_id, delete_status:false}, order:[['id','DESC']]})
    const unresolvedPromises = groups.map(async (group:any) => {
      return await this.columnvalueRepository.findAll<Columnvalue>({where: { group_id:group?.id, delete_status:false }})
    })
    const results:any = await Promise.all(unresolvedPromises);
    return results;
  }

  async update(id: number, updateColumnvalueDto: UpdateColumnvalueDto) {
    return await this.columnvalueRepository.update<Columnvalue>(updateColumnvalueDto, {where: {id}});
  }

  async remove(id: number) {
    let data = {
      delete_status:true
    }
    return await this.columnvalueRepository.update<Columnvalue>(data, {where: {id}});
    // return await this.columnvalueRepository.destroy({where: {id}})
  }

  findOne(id: number) {
    return `This action returns a #${id} columnvalue`;
  }
}
