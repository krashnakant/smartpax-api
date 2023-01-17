import { Injectable, Inject } from '@nestjs/common';
import { COLUMNPEOPLE_REPOSITORY } from 'src/core/constants';
import { CreateColumnpeopleDto } from './dto/create-columnpeople.dto';
import { UpdateColumnpeopleDto } from './dto/update-columnpeople.dto';
import { Columnpeople } from './entities/columnpeople.entity';

@Injectable()
export class ColumnpeoplesService {

  constructor(@Inject(COLUMNPEOPLE_REPOSITORY) private readonly columnpeopleRepository: typeof Columnpeople) { }

  async create(createColumnpeopleDto: CreateColumnpeopleDto): Promise<Columnpeople> {
    return await this.columnpeopleRepository.create<Columnpeople>(createColumnpeopleDto);
  }

  async findAll(): Promise<Columnpeople[]> {
    return await this.columnpeopleRepository.findAll<Columnpeople>();
  }


  findOne(id: number) {
    return `This action returns a #${id} columnpeople`;
  }

  update(id: number, updateColumnpeopleDto: UpdateColumnpeopleDto) {
    return `This action updates a #${id} columnpeople`;
  }

  remove(id: number) {
    return `This action removes a #${id} columnpeople`;
  }
}
