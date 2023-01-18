import { Injectable,Inject } from '@nestjs/common';
import { COLUMN_REPOSITORY, DROPDOWN_REPOSITORY, STATUS_REPOSITORY, USER_REPOSITORY } from 'src/core/constants';
import { Dropdown } from '../dropdowns/entities/dropdown.entity';
import { Status } from '../statuses/entities/status.entity';
import { User } from '../users/entities/user.entity';
import { CreateColumnDto } from './dto/create-column.dto';
import { UpdateColumnDto } from './dto/update-column.dto';
import { GColumn } from './entities/column.entity';

@Injectable()
export class ColumnsService {

  constructor(
    @Inject(COLUMN_REPOSITORY) private readonly columnRepository: typeof GColumn,
    @Inject(DROPDOWN_REPOSITORY) private readonly dropdownRepository: typeof Dropdown,
    @Inject(USER_REPOSITORY) private readonly peopleRepository: typeof User,
    @Inject(STATUS_REPOSITORY) private readonly statusRepository: typeof Status,
  ) { }

  async create(createColumnDto: CreateColumnDto): Promise<GColumn> {
    return await this.columnRepository.create<GColumn>(createColumnDto);
  }

  async findOneById(id: number): Promise<GColumn> {
    return await this.columnRepository.findOne<GColumn>({ where: { id }, include:[this.dropdownRepository, this.peopleRepository, this.statusRepository] });
  }

  async findAll(): Promise<GColumn[]> {
    return await this.columnRepository.findAll<GColumn>({include:[this.dropdownRepository, this.peopleRepository, this.statusRepository]});
  }

  async findAllByItemId(item_id: number): Promise<GColumn[]> {
    return await this.columnRepository.findAll<GColumn>({where: { item_id },include:[this.dropdownRepository, this.peopleRepository, this.statusRepository]});
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
