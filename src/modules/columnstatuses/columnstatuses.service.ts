import { Injectable, Inject } from '@nestjs/common';
import { COLUMNSTATUS_REPOSITORY } from 'src/core/constants';
import { CreateColumnstatusDto } from './dto/create-columnstatus.dto';
import { UpdateColumnstatusDto } from './dto/update-columnstatus.dto';
import { Columnstatus } from './entities/columnstatus.entity';

@Injectable()
export class ColumnstatusesService {

  constructor(@Inject(COLUMNSTATUS_REPOSITORY) private readonly columnstatusRepository: typeof Columnstatus) { }

  async create(createColumnstatusDto: CreateColumnstatusDto): Promise<Columnstatus> {
    return await this.columnstatusRepository.create<Columnstatus>(createColumnstatusDto);
  }

  async findAll(): Promise<Columnstatus[]> {
    return await this.columnstatusRepository.findAll<Columnstatus>();
  }


  findOne(id: number) {
    return `This action returns a #${id} columnstatus`;
  }

  update(id: number, updateColumnstatusDto: UpdateColumnstatusDto) {
    return `This action updates a #${id} columnstatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} columnstatus`;
  }
}
