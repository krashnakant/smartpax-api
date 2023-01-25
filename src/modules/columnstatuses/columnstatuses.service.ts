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
    return await this.columnstatusRepository.findAll<Columnstatus>({where: {delete_status:false}});
  }

  findOne(id: number) {
    return `This action returns a #${id} columnstatus`;
  }

  async update(id: number, updateColumnstatusDto: UpdateColumnstatusDto) {
    return await this.columnstatusRepository.update<Columnstatus>(updateColumnstatusDto, {where: {id}});
  }

  async remove(id: number) {
    let data = {
      delete_status:true
    }
    return await this.columnstatusRepository.update<Columnstatus>(data, {where: {id}});
    // return await this.columnstatusRepository.destroy({where: {id}})
  }  
}
