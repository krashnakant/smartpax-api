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

  findOne(id: number) {
    return `This action returns a #${id} columnvalue`;
  }

  update(id: number, updateColumnvalueDto: UpdateColumnvalueDto) {
    return `This action updates a #${id} columnvalue`;
  }

  remove(id: number) {
    return `This action removes a #${id} columnvalue`;
  }
}
