import { Injectable, Inject } from '@nestjs/common';
import { DEFAULTCOLUMNDROPDOWN_REPOSITORY, DEFAULTCOLUMNPEOPLE_REPOSITORY, DEFAULTCOLUMNSTATUS_REPOSITORY, DEFAULTCOLUMN_REPOSITORY } from 'src/core/constants';
import { Defaultcolumndropdown } from '../defaultcolumndropdowns/entities/defaultcolumndropdown.entity';
import { Defaultcolumnperson } from '../defaultcolumnpeople/entities/defaultcolumnperson.entity';
import { Defaultcolumnstatus } from '../defaultcolumnstatuses/entities/defaultcolumnstatus.entity';
import { CreateDefaultcolumnDto } from './dto/create-defaultcolumn.dto';
import { UpdateDefaultcolumnDto } from './dto/update-defaultcolumn.dto';
import { Defaultcolumn } from './entities/defaultcolumn.entity';

@Injectable()
export class DefaultcolumnsService {

  constructor(
    @Inject(DEFAULTCOLUMN_REPOSITORY) private readonly defaultColumnRepository: typeof Defaultcolumn,
    @Inject(DEFAULTCOLUMNDROPDOWN_REPOSITORY) private readonly defaultColumnDropdownRepository: typeof Defaultcolumndropdown,
    @Inject(DEFAULTCOLUMNPEOPLE_REPOSITORY) private readonly columnPeopleRepository: typeof Defaultcolumnperson,
    @Inject(DEFAULTCOLUMNSTATUS_REPOSITORY) private readonly columnStatusRepository: typeof Defaultcolumnstatus,
  ) { }

  async create(createDefaultcolumnDto: CreateDefaultcolumnDto): Promise<Defaultcolumn> {
    return await this.defaultColumnRepository.create<Defaultcolumn>(createDefaultcolumnDto);
  }

  async findOneById(id: number): Promise<Defaultcolumn> {
    return await this.defaultColumnRepository.findOne<Defaultcolumn>({ where: { id } });
  }

  async findAll(): Promise<Defaultcolumn[]> {
    return await this.defaultColumnRepository.findAll<Defaultcolumn>({where: {delete_status:false}});
  }

  findOne(id: number) {
    return `This action returns a #${id} defaultcolumn`;
  }

  async update(id: number, updateDefaultcolumnDto: UpdateDefaultcolumnDto) {
    return await this.defaultColumnRepository.update<Defaultcolumn>(updateDefaultcolumnDto, {where: {id}});
  }

  async remove(id: number) {
    let data = {
      delete_status:true
    }
    return await this.defaultColumnRepository.update<Defaultcolumn>(data, {where: {id}});
    // return await this.defaultColumnRepository.destroy({where: {id}})
  }
}
