import { Injectable, Inject } from '@nestjs/common';
import { COLUMNPEOPLE_REPOSITORY } from 'src/core/constants';
import { CreateColumnpeopleDto } from './dto/create-columnperson.dto';
import { UpdateColumnpeopleDto } from './dto/update-columnperson.dto';
import { Columnperson } from './entities/columnperson.entity';

@Injectable()
export class ColumnpeoplesService {

  constructor(@Inject(COLUMNPEOPLE_REPOSITORY) private readonly columnpeopleRepository: typeof Columnperson) { }

  async create(createColumnpeopleDto: CreateColumnpeopleDto): Promise<Columnperson> {
    return await this.columnpeopleRepository.create<Columnperson>(createColumnpeopleDto);
  }

  async findAll(): Promise<Columnperson[]> {
    return await this.columnpeopleRepository.findAll<Columnperson>();
  }

  findOne(id: number) {
    return `This action returns a #${id} columnpeople`;
  }

  async update(id: number, updateColumnpeopleDto: UpdateColumnpeopleDto) {
    return await this.columnpeopleRepository.update<Columnperson>(updateColumnpeopleDto, {where: {id}});
  }

  async remove(id: number) {
    return await this.columnpeopleRepository.destroy({where: {id}})
  }  
}
