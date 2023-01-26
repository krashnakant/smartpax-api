import { Injectable, Inject } from '@nestjs/common';
import { DEFAULTCOLUMNDROPDOWN_REPOSITORY } from 'src/core/constants';
import { CreateDefaultcolumndropdownDto } from './dto/create-defaultcolumndropdown.dto';
import { UpdateDefaultcolumndropdownDto } from './dto/update-defaultcolumndropdown.dto';
import { Defaultcolumndropdown } from './entities/defaultcolumndropdown.entity';

@Injectable()
export class DefaultcolumndropdownsService {

  constructor(@Inject(DEFAULTCOLUMNDROPDOWN_REPOSITORY) private readonly defaultcolumndropdownRepository: typeof Defaultcolumndropdown) { }

  async create(createDefaultcolumndropdownDto: CreateDefaultcolumndropdownDto): Promise<Defaultcolumndropdown> {
    return await this.defaultcolumndropdownRepository.create<Defaultcolumndropdown>(createDefaultcolumndropdownDto);
  }

  async findAll(): Promise<Defaultcolumndropdown[]> {
    return await this.defaultcolumndropdownRepository.findAll<Defaultcolumndropdown>({where: {delete_status:false}});
  }

  findOne(id: number) {
    return `This action returns a #${id} defaultcolumndropdown`;
  }

  async update(id: number, updateDefaultcolumndropdownDto: UpdateDefaultcolumndropdownDto) {
    return await this.defaultcolumndropdownRepository.update<Defaultcolumndropdown>(updateDefaultcolumndropdownDto, {where: {id}});
  }

  async remove(id: number) {
    let data = {
      delete_status:true
    }
    return await this.defaultcolumndropdownRepository.update<Defaultcolumndropdown>(data, {where: {id}});
    // return await this.defaultcolumndropdownRepository.destroy({where: {id}})
  }  
}
