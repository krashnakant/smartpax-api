import { Injectable, Inject } from '@nestjs/common';
import { COLUMNPEOPLE_REPOSITORY } from 'src/core/constants';
import { CreateColumnpersonDto } from './dto/create-columnperson.dto';
import { UpdateColumnpersonDto } from './dto/update-columnperson.dto';
import { Columnperson } from './entities/columnperson.entity';

@Injectable()
export class ColumnpeopleService {

  constructor(@Inject(COLUMNPEOPLE_REPOSITORY) private readonly columnpersonRepository: typeof Columnperson) { }

  async create(createColumnpersonDto: CreateColumnpersonDto): Promise<Columnperson> {
    return await this.columnpersonRepository.create<Columnperson>(createColumnpersonDto);
  }

  async findAll(): Promise<Columnperson[]> {
    return await this.columnpersonRepository.findAll<Columnperson>();
  }


  findOne(id: number) {
    return `This action returns a #${id} columnperson`;
  }

  update(id: number, updateColumnpersonDto: UpdateColumnpersonDto) {
    return `This action updates a #${id} columnperson`;
  }

  remove(id: number) {
    return `This action removes a #${id} columnperson`;
  }
}
