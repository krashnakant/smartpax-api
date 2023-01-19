import { Injectable, Inject } from '@nestjs/common';
import { COLUMN_REPOSITORY, GROUP_REPOSITORY } from 'src/core/constants';
import { GColumn } from '../columns/entities/column.entity';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { Group } from './entities/group.entity';

@Injectable()
export class GroupsService {

  constructor(
    @Inject(GROUP_REPOSITORY) private readonly groupRepository: typeof Group,
    @Inject(COLUMN_REPOSITORY) private readonly columnRepository: typeof GColumn
  ) { }

  async create(createGroupDto: CreateGroupDto): Promise<Group> {    
    console.log(createGroupDto);
    return await this.groupRepository.create<Group>(createGroupDto);
  }

  async findAllGroups(item_id: number): Promise<Group[]> {
    let groups = await this.groupRepository.findAll<Group>({where: {item_id}}) 
    return groups;
  }

  findAll() {
    return `This action returns all groups`;
  }

  findOne(id: number) {
    return `This action returns a #${id} group`;
  }

  update(id: number, updateGroupDto: UpdateGroupDto) {
    return `This action updates a #${id} group`;
  }

  remove(id: number) {
    return `This action removes a #${id} group`;
  }
}
