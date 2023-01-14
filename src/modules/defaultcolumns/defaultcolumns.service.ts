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
    return await this.defaultColumnRepository.findAll<Defaultcolumn>();
  }

  findOne(id: number) {
    return `This action returns a #${id} defaultcolumn`;
  }

  update(id: number, updateDefaultcolumnDto: UpdateDefaultcolumnDto) {
    return `This action updates a #${id} defaultcolumn`;
  }

  remove(id: number) {
    return `This action removes a #${id} defaultcolumn`;
  }
}
