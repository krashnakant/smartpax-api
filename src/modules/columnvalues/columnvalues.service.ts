import { Injectable, Inject } from '@nestjs/common';
import { COLUMNVALUE_REPOSITORY } from 'src/core/constants';
import { CreateColumnvalueDto } from './dto/create-columnvalue.dto';
import { UpdateColumnvalueDto } from './dto/update-columnvalue.dto';
import { Columnvalue } from './entities/columnvalue.entity';

@Injectable()
export class ColumnvaluesService {

  constructor(@Inject(COLUMNVALUE_REPOSITORY) private readonly columnvalueRepository: typeof Columnvalue) { }

  async create(createColumnvalueDto: CreateColumnvalueDto): Promise<Columnvalue> {
    return await this.columnvalueRepository.create<Columnvalue>(createColumnvalueDto);
  }

  async findAll(): Promise<Columnvalue[]> {
    return await this.columnvalueRepository.findAll<Columnvalue>();
  }
  async findAllByGroupId(group_id: number): Promise<Columnvalue[]> {
    return await this.columnvalueRepository.findAll<Columnvalue>({where: { group_id }});
  }

  async update(id: number, updateColumnvalueDto: UpdateColumnvalueDto) {
    return await this.columnvalueRepository.update<Columnvalue>(updateColumnvalueDto, {where: {id}});
  }

  async remove(id: number) {
    return await this.columnvalueRepository.destroy({where: {id}})
  }

  findOne(id: number) {
    return `This action returns a #${id} columnvalue`;
  }
}
