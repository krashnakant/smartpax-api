import { Injectable,Inject } from '@nestjs/common';
import { COLUMNDROPDOWN_REPOSITORY, COLUMNPEOPLE_REPOSITORY, COLUMNSTATUS_REPOSITORY, COLUMN_REPOSITORY } from 'src/core/constants';
import { Columndropdown } from '../columndropdowns/entities/columndropdown.entity';
import { Columnperson } from '../columnpeople/entities/columnperson.entity';
import { Columnstatus } from '../columnstatuses/entities/columnstatus.entity';
import { CreateColumnDto } from './dto/create-column.dto';
import { UpdateColumnDto } from './dto/update-column.dto';
import { GColumn } from './entities/column.entity';

@Injectable()
export class ColumnsService {

  constructor(
    @Inject(COLUMN_REPOSITORY) private readonly columnRepository: typeof GColumn,
    @Inject(COLUMNDROPDOWN_REPOSITORY) private readonly columnDropdownRepository: typeof Columndropdown,
    @Inject(COLUMNPEOPLE_REPOSITORY) private readonly columnPeopleRepository: typeof Columnperson,
    @Inject(COLUMNSTATUS_REPOSITORY) private readonly columnStatusRepository: typeof Columnstatus,
  ) { }

  async create(createColumnDto: CreateColumnDto): Promise<GColumn> {
    return await this.columnRepository.create<GColumn>(createColumnDto);
  }

  async findOneById(id: number): Promise<GColumn> {
    return await this.columnRepository.findOne<GColumn>({ where: { id }, include:[this.columnDropdownRepository, this.columnPeopleRepository, this.columnStatusRepository] });
  }

  async findAll(): Promise<GColumn[]> {
    return await this.columnRepository.findAll<GColumn>({include:[this.columnDropdownRepository, this.columnPeopleRepository, this.columnStatusRepository]});
  }

  findOne(id: number) {
    return `This action returns a #${id} column`;
  }

  update(id: number, updateColumnDto: UpdateColumnDto) {
    return `This action updates a #${id} column`;
  }

  remove(id: number) {
    return `This action removes a #${id} column`;
  }
}
