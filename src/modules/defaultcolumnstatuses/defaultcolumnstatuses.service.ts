import { Injectable, Inject } from '@nestjs/common';
import { DEFAULTCOLUMNSTATUS_REPOSITORY } from 'src/core/constants';
import { CreateDefaultcolumnstatusDto } from './dto/create-defaultcolumnstatus.dto';
import { UpdateDefaultcolumnstatusDto } from './dto/update-defaultcolumnstatus.dto';
import { Defaultcolumnstatus } from './entities/defaultcolumnstatus.entity';

@Injectable()
export class DefaultcolumnstatusesService {

  constructor(@Inject(DEFAULTCOLUMNSTATUS_REPOSITORY) private readonly defaultcolumnstatusRepository: typeof Defaultcolumnstatus) { }

  async create(createDefaultcolumnstatusDto: CreateDefaultcolumnstatusDto): Promise<Defaultcolumnstatus> {
    return await this.defaultcolumnstatusRepository.create<Defaultcolumnstatus>(createDefaultcolumnstatusDto);
  }

  async findAll(): Promise<Defaultcolumnstatus[]> {
    return await this.defaultcolumnstatusRepository.findAll<Defaultcolumnstatus>({where: {delete_status:false}});
  }


  findOne(id: number) {
    return `This action returns a #${id} defaultcolumnstatus`;
  }

  async update(id: number, updateDefaultcolumnstatusDto: UpdateDefaultcolumnstatusDto) {
    return await this.defaultcolumnstatusRepository.update<Defaultcolumnstatus>(updateDefaultcolumnstatusDto, {where: {id}});
  }

  async remove(id: number) {
    let data = {
      delete_status:true
    }
    return await this.defaultcolumnstatusRepository.update<Defaultcolumnstatus>(data, {where: {id}});
    // return await this.defaultcolumnstatusRepository.destroy({where: {id}})
  }
}
